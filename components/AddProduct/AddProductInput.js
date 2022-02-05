function AddProductInput({ register }) {
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
          />
        </div>

        {/* TODO: availble brand category price */}
        <div className="grid grid-cols-3 space-x-3">
          {/* select option */}

          <div className="space-y-2">
            <label className="labelText">Category </label>
            <select {...register("category")} className="input-box">
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
            />
          </div>
          {/* TODO: quantity */}
          <div className="space-y-2">
            <label className="labelText">Quantity </label>
            <input
              type="number"
              {...register("totalQuantity", { required: true })}
              className="input-box"
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
            />
          </div>

          {/* FIXME: coupon */}
          <div className="space-y-2">
            <label className="labelText">Cooupon </label>
            <input type="text" {...register("sku")} className="input-box" />
          </div>
          <div className="space-y-2">
            <label className="labelText">Weight(KG)</label>
            <input
              type="number"
              {...register("weight", { required: true })}
              className="input-box"
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
          ></textarea>
        </div>
        <div className="space-y-2">
          <label className="labelText">Product Long Description </label>
          <textarea
            className="w-full input-box resize-none"
            cols="30"
            rows="10"
            {...register("longDescription", { required: true })}
          ></textarea>
        </div>

        <h1 className="labelText">Size</h1>
        <div className="grid grid-cols-5 space-x-3">
          <div className="space-y-2">
            <input type="checkbox" />
            <label className="labelText"> XS</label>
          </div>
          <div className="space-y-2">
            <input type="checkbox" />
            <label className="labelText"> S</label>
          </div>
          <div className="space-y-2">
            <input type="checkbox" />
            <label className="labelText"> M</label>
          </div>
          <div className="space-y-2">
            <input type="checkbox" />
            <label className="labelText"> L</label>
          </div>
          <div className="space-y-2">
            <input type="checkbox" />
            <label className="labelText"> XL</label>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AddProductInput;
