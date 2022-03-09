import { SaveAsIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useRouter } from "next/router";
import AddProductImage from "../../../AddProduct/AddProductImage";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import axios from "axios";

function ProductBottom() {
  const [images, setImageURL] = useState([]);
  const [inputData, setInputData] = useState({});
  const [inputs, setInputs] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data: session } = useSession();
  const router = useRouter();

  // This code for add product

  // todo Image upload to image bb
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

  // todo delete the selected product
  const deleteHandler = (params) => {
    let newImages = [...images];
    newImages.splice(params, 1);
    setImageURL(newImages);
  };

  // todo cerate the handler
  const onSubmit = async (data) => {
    setInputData(data);
    const res = await fetch("/api/productitem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        image: images,
        email: session?.user.email,
      }),
    });

    if (res.ok) {
      console.log("Post done");
      router.push("/user/my-product");
    } else {
      console.log("err");
    }
  };

  return (
    <div className="max-w-[970px] px-6 py-8 bg-white rounded-md">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between space-x-6">
          <div className="flex-col space-y-2 flex-1">
            <label className="font-semibold text-lg">Title</label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="input-box-admin"
            />
          </div>
          {/* email */}
          <div className="flex-col space-y-2">
            <label className="font-semibold text-lg">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input-box-admin"
            />
          </div>
        </div>
        {/* price abilytiy total  */}
        <div className="flex items-center space-x-5">
          <div className="flex-col space-y-2">
            <label className="font-semibold text-lg">Price</label>
            <input
              {...register("price", { required: true })}
              type="number"
              className="input-box-admin"
            />
          </div>
          {/* category */}
          <div className="flex flex-col space-y-3 w-full">
            <label className="font-semibold text-lg">Category</label>
            <select
              name="cate"
              {...register("category")}
              id=""
              className="w-full border-2 shadow-md rounded-md border-header400 outline-none px-4 py-2"
            >
              <option value="all">Select</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Sofa">Sofa</option>
              <option value="Office">Office</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Mattress">Mattress</option>
              <option value="Dinings">Dinings</option>
            </select>
          </div>
          {/* brands */}
          <div className="flex-col space-y-2">
            <label className="font-semibold text-lg">Brand</label>
            <input
              type="text"
              {...register("brand", { required: true })}
              className="input-box-admin"
            />
          </div>
        </div>
        {/* another one */}
        <div className="flex items-center space-x-5">
          <div className="flex-col space-y-2">
            <label className="font-semibold text-lg">TotalQuantity</label>
            <input
              type="number"
              className="input-box-admin"
              {...register("totalQuantity", { required: true })}
            />
          </div>
          {/* category */}
          <div className="flex flex-col space-y-3">
            <label className="font-semibold text-lg">Weight</label>
            <input
              type="number"
              className="input-box-admin"
              {...register("weight", { required: true })}
            />
          </div>
          {/* brands */}
          <div className="flex-col space-y-2">
            <label className="font-semibold text-lg">Material</label>
            <input
              type="text"
              {...register("material", { required: true })}
              className="input-box-admin"
            />
          </div>
        </div>
        {/* avality true */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center flex-col space-y-3">
            <h2 className="font-semibold text-lg">Availability</h2>
            <input
              type="checkbox"
              {...register("availability", { required: true })}
            />
          </div>

          <div className="flex-col space-y-2">
            <label className="font-semibold text-lg">Sku</label>
            <input
              type="text"
              className="input-box-admin"
              {...register("sku")}
            />
          </div>

          {/*  short Discription*/}
          <div className="space-y-3">
            <label className="font-semibold text-lg">Short Descrioption</label>

            <input
              type="text"
              {...register("shortDescription", { required: true })}
              className="input-box-admin"
            />
          </div>
        </div>

        {/* TODO: Imageds */}
        <AddProductImage
          images={images}
          handleImageUpload={handleImageUpload}
          deleteHandler={deleteHandler}
        />

        {/* long descrption */}
        <div className="space-y-3">
          <label className="font-semibold text-lg">LongDescription</label>

          <textarea
            {...register("longDescription", { required: true })}
            className="w-full input-box-admin h-[150px] resize-none"
          ></textarea>
        </div>

        {/* submit button */}
        <div>
          <button
            type="submit"
            className="bg-[#353182] hover:bg-indigo-800 flex items-center space-x-1 md:space-x-2 px-2 md:px-6 py-3 hover:shadow-lg text-white font-semibold rounded-md shadow-md text-sm"
          >
            <SaveAsIcon className="h-5" />
            <p>Save</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductBottom;
