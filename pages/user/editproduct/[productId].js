import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import WishListSidebar from "../../../components/WishListPage/WishListSidebar";
import AddProductInput from "../../../components/AddProduct/AddProductInput";
import AddProductImage from "../../../components/AddProduct/AddProductImage";

function editProduct() {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [images, setImageURL] = useState([]);
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

  const onSubmit = async (data) => {
    setInputData(data);
    const res = await fetch("/api/product", {
      method: "POST",
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
      console.log("Post done");
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
                />
                <AddProductImage
                  images={images}
                  handleImageUpload={handleImageUpload}
                />
              </div>
              <input className="btn" type="submit" />
            </form>
          </main>
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </>
  );
}

export default editProduct;
