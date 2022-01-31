import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

function AddProductInput({register}) {
  return (
    <div>
      {/* FIXME:  input box */}
      {/* <div className="flex items-center space-x-3 px-2 pl-0 py-3 font-bold cursor-pointer">
        <ArrowCircleLeftIcon className="h-6 bg-gray-500 text-white rounded-full" />
        <h3 className="text-lg">Add Product</h3>
      </div> */}
      {/* TODO: input box */}
      <div className="flex flex-col space-y-5">
        {/* FIXME: single input */}
        <div className="space-y-2">
          <label className="labelText">Product Name </label>
          <input type="text" {...register('title', { required: true })} className="input-box" />
        </div>

        {/* TODO: availble brand category price */}
        <div className="grid grid-cols-3 space-x-3">
          {/* select option */}
          
          <div className="space-y-2">
            <label className="labelText">Category </label>
            <select {...register("category")} className="input-box">
              <option value="all">--Select--</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Sofa">Sofa</option>
              <option value="Office">Office</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Mattress">Mattress</option>
              <option value="Dinings">Dinings</option>
            </select>
          </div>
          {/* FIXME: price */}
          <div className="space-y-2">
            <label className="labelText">Price </label>
            <input type="number" {...register('price', { required: true })} className="input-box" />
          </div>
          {/* TODO: quantity */}
          <div className="space-y-2">
            <label className="labelText">Quantity </label>
            <input type="number" {...register('totalQuantity', { required: true })} className="input-box" />
          </div>
        </div>
        {/* another */}
        <div className="grid grid-cols-2 space-x-3">
          {/* FIXME: Brands */}
          <div className="space-y-2">
            <label className="labelText">Brand </label>
            <input type="text" {...register('brand', { required: true })} className="input-box" />
          </div>

          {/* FIXME: cupon */}
          <div className="space-y-2">
            <label className="labelText">Cuppon </label>
            <input type="text" {...register('sku', { required: true })} className="input-box" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="labelText">Product Description </label>
          <textarea
            className="w-full input-box resize-none"
            cols="30"
            rows="10"
            {...register('longDescription', { required: true })}
          ></textarea>
        </div>
        {/* TODO: availble */}
        <div className="grid grid-cols-3 space-x-3">
          {/* ratting: Fix Me */}
          <div className="space-y-2">
            <label className="labelText">Available </label>
            <input type="text" className="input-box" />
          </div>
          {/* FIXME: Brands */}
          <div className="space-y-2">
            <label className="labelText">Size </label>
            <input type="text" className="input-box" />
          </div>

          {/* FIXME: cupon */}
          <div className="space-y-2">
            <label className="labelText">Color </label>
            <input type="text" className="input-box" />
          </div>
        </div>
        <div className="grid grid-cols-3 space-x-3">
          {/* ratting: Fix Me */}
          <div className="space-y-2">
            <label className="labelText">Available </label>
            <input type="text" className="input-box" />
          </div>
          {/* FIXME: Brands */}
          <div className="space-y-2">
            <label className="labelText">Size </label>
            <input type="text" className="input-box" />
          </div>

          {/* FIXME: cupon */}
          <div className="space-y-2">
            <label className="labelText">Color </label>
            <input type="text" className="input-box" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="labelText">Product Details </label>
          <textarea
            className="w-full input-box resize-none"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <input className="btn" type="submit" />
        </div>
      </div>
    </div>
  );
}

export default AddProductInput;
