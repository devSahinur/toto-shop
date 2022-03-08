import React, { useState } from "react";
import ItemsBottom from "./ItemsBottom";
import ItemsTop from "./ItemsTop";

function ItemsFeed({ products }) {
  const [filterShow, setFilterShow] = useState(false);

  return (
    <div>
      <ItemsTop filterShow={filterShow} setFilterShow={setFilterShow} />
      {/* TODO: filter content */}
      {filterShow && (
        <div className="px-5 py-4 bg-[#E2E8F0] rounded-md animationFadein">
          {/* content wrapper */}
          <div className="space-y-3 md:flex items-center md:space-y-0 md:space-x-6 ">
            {/* FIXME: single content */}
            <div className="space-y-2 md:flex-1">
              <label className="text-gray-600 font-semibold ">Name</label>
              <input type="text" className="input-box-admin" />
            </div>
            <div className="flex flex-col space-y-2 md:flex-1">
              <label className="text-gray-600 font-semibold">Category</label>
              <select
                name="cate"
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

            {/* Price */}
            <div className="space-y-2 md:flex-1">
              <label className="text-gray-600 font-semibold">Price</label>
              <input
                defaultValue={0}
                type="number"
                className="input-box-admin"
              />
            </div>
          </div>
        </div>
      )}
      <ItemsBottom products={products} />
    </div>
  );
}

export default ItemsFeed;
