// React, Next lib
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
// Custom lib
import dbConnect from "./../../../lib/dbConnect";
// Model
import User from "./../../../models/User";
import Product from "./../../../models/Product";
// Component
import Layout from "../../../components/layout";
import WishListSidebar from "../../../components/WishListPage/WishListSidebar";
import AddProductInput from "../../../components/AddProduct/AddProductInput";
import AddProductImage from "../../../components/AddProduct/AddProductImage";

function editProduct({ product, user }) {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [images, setImageURL] = useState(product.image);
  const [inputData, setInputData] = useState({});
  const [inputs, setInputs] = useState({});

  // TODO: image

  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "701a71fc100ddc2599c9438b268fee30");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then((response) => {
        let image = [];
        let newImages = [...images];
        newImages.push(response.data.data.display_url);
        image = newImages;
        setImageURL(image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const imageRemoveControl = (image) => {
    // console.log(image);
    const arrayImage = [...images];
    const index = arrayImage.indexOf(image);
    if (index > -1) {
      arrayImage.splice(index, 1); // 2nd parameter means remove one item only
    }
    setImageURL(arrayImage);
    // console.log();
  };

  const onSubmit = async (data) => {
    setInputData(data);
    const res = await fetch("/api/productitem", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        image: images,
        email: session.user.email,
      }),
    });

    if (res.ok) {
      console.log("Post Update done");
      router.push("/user/my-product");
    }
  };

  return (
    <>
      <Layout title={"Add Product"}>
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />
          {/* <!-- account content --> */}
          <main className="col-span-9 px-5 md:px-8 py-6 space-y-6">
            {/* content Main */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 space-y-5  md:grid-cols-2 md:space-x-5">
                <AddProductInput
                  setInputs={setInputs}
                  inputs={inputs}
                  register={register}
                  product={product}
                />
                <AddProductImage
                  images={images}
                  imageRemoveControl={imageRemoveControl}
                  handleImageUpload={handleImageUpload}
                />
              </div>
              <input className="btn" type="submit" value={"Confirm change"} />
            </form>
          </main>
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </>
  );
}

export default editProduct;

export async function getServerSideProps(context) {
  const { req } = context;
  const { _id } = context.query;
  const session = await getSession({ req });
  if (session) {
    await dbConnect();
    const leanResponse = await User.findOne(
      {
        name: session.user.name,
        email: session.user.email,
      },
      { name: 1, email: 1, image: 1, _id: 1 }
    ).lean();
    leanResponse._id = leanResponse._id.toString();

    const item = await Product.findOne({ id: _id }, { color: 0 }).lean();
    const product = JSON.parse(JSON.stringify(item));

    return {
      props: {
        user: leanResponse,
        product,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/signup",
        permanent: false,
      },
    };
  }
}
