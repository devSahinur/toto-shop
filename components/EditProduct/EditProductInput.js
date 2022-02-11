function EditProductInput({ register, product }) {
  return (
    <div>
      {/* TODO: input box */}
      <div className="flex flex-col space-y-5">
        {/* FIXME: single input */}
        <div className="space-y-2">
          <label className="labelText">Product Name </label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="input-box"
            defaultValue={product?.title}
          />
        </div>

        {/* TODO: availble brand category price */}
        <div className="grid grid-cols-3 space-x-3">
          {/* select option */}

          <div className="space-y-2">
            <label className="labelText">Category </label>
            <select
              {...register("category")}
              defaultValue={product?.category}
              className="input-box"
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
          {/* FIXME: price */}
          <div className="space-y-2">
            <label className="labelText">Price </label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="input-box"
              defaultValue={product?.price}
            />
          </div>
          {/* TODO: quantity */}
          <div className="space-y-2">
            <label className="labelText">Quantity </label>
            <input
              type="number"
              {...register("totalQuantity", { required: true })}
              className="input-box"
              defaultValue={product?.totalQuantity}
            />
          </div>
        </div>
        {/* another */}
        <div className="grid grid-cols-3 space-x-3">
          {/* FIXME: Brands */}
          <div className="space-y-2">
            <label className="labelText">Brand </label>
            <input
              type="text"
              {...register("brand", { required: true })}
              className="input-box"
              defaultValue={product?.brand}
            />
          </div>

          {/* FIXME: coupon */}
          <div className="space-y-2">
            <label className="labelText">Coupon </label>
            <input
              type="text"
              defaultValue={product?.sku}
              {...register("sku")}
              className="input-box"
            />
          </div>
          <div className="space-y-2">
            <label className="labelText">Weight(KG)</label>
            <input
              type="number"
              {...register("weight", { required: true })}
              className="input-box"
              defaultValue={product?.weight}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="labelText">Product short Description </label>
          <textarea
            className="w-full h-20 input-box resize-none"
            cols="30"
            rows="10"
            {...register("shortDescription", { required: true })}
            defaultValue={product?.shortDescription}
          ></textarea>
        </div>
        <div className="space-y-2">
          <label className="labelText">Product Long Description </label>
          <textarea
            className="w-full input-box resize-none"
            cols="30"
            rows="10"
            {...register("longDescription", { required: true })}
            defaultValue={product?.longDescription}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default EditProductInput;
