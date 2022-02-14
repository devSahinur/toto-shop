// React, Next lib
import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
// Custom lib
import dbConnect from "./../../../lib/dbConnect";
import withAuth from "../../../lib/withAuth";
// Model
import User from "./../../../models/User";
import Product from "./../../../models/Product";
// Component
// import Layout from "../../../components/layout";
import WishListSidebar from "../../../components/WishListPage/WishListSidebar";
import EditProductImage from "../../../components/EditProduct/EditProductImage";
import EditProductInput from "../../../components/EditProduct/EditProductInput";

function editProduct({ product, user }) {
  // console.log(product, user);
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
    const arrayImage = [...images];
    const index = arrayImage.indexOf(image);
    if (index > -1) {
      arrayImage.splice(index, 1); // 2nd parameter means remove one item only
    }
    setImageURL(arrayImage);
  };

  const onSubmit = async (data) => {
    setInputData(data);
    const res = await fetch(`/api/productitem`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        image: images,
        availability: product.availability,
        color: product.color,
        email: product.email,
        id: product.id,
        _id: product._id,
        material: product.material,
        reviews: product.reviews,
      }),
    });

    if (res.ok) {
      console.log("Product Update done");
      router.push("/user/my-product");
    }
  };

  return (
    <>
      <Head>
        <title>Edit Product({product.title}) - ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      {/* <Layout title={"Add Product"}> */}
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />
          <main className="col-span-9 px-5 md:px-8 py-6 space-y-6">
            {/* content Main */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 space-y-5  md:grid-cols-2 md:space-x-5">
                <EditProductInput
                  setInputs={setInputs}
                  inputs={inputs}
                  register={register}
                  product={product}
                />
                <EditProductImage
                  images={images}
                  imageRemoveControl={imageRemoveControl}
                  handleImageUpload={handleImageUpload}
                />
              </div>
              <input className="btn mt-5" type="submit" value={"Confirm change"} />
            </form>
          </main>
        </div>
      {/* </Layout> */}
    </>
  );
}

export default withAuth(editProduct);

export async function getServerSideProps(context) {
  const { req } = context;
  const { productId } = context.query;
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

    const item = await Product.findOne({ _id: productId }).lean();
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
        destination: "/login",
        permanent: false,
      },
    };
  }
}
