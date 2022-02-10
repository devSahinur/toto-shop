import { useState } from "react";
import ShopCategory from "./ShopCategory/ShopCategory";
import { XIcon } from "@heroicons/react/solid";
import categories from "../../../lib/categoryList";
import { useRouter } from "next/router";

function ShopSidebar({ fileterbtn, setShowSidebar }) {
  const router = useRouter();
  // for the price slider range
  const [value, setValue] = useState([20, 37]);
  const min = router.query.minprice ? router.query.minprice : "";
  const max = router.query.maxprice ? router.query.maxprice : "";
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const handleMinChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
  };

  const handlePriceSubmit = (e) => {
    router.push({
      pathname: "/shop",
      query: { ...router.query, minprice: minPrice, maxprice: maxPrice },
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  return (
    <div
      className={`px-4 py-6 shadow-lg rounded-md border max-w-[275px]  pl-6 h-fit ${
        !fileterbtn
          ? "hidden xl:block"
          : "absolute z-50 bg-white top-14 -left-4"
      }`}
    >
      {/* category */}
      <div className=" border-b space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl text-gray-800  uppercase font-medium">
            Categories
          </h1>
          {setShowSidebar && (
            <XIcon
              onClick={() => setShowSidebar(false)}
              className="h-5 hover:text-primary text-gray-600 transform hover:scale-105 transition-all ease-in cursor-pointer"
            />
          )}
        </div>
        {categories.slice(0, 6).map((category) => (
          <ShopCategory category={category} />
        ))}
      </div>

      {/* Brands */}
      <div className="py-4 border-b space-y-4">
        <h1 className="text-xl font-medium uppercase">Brands</h1>
        {/* <ShopCategory setvalue={setAdidas} title="Adidas" /> */}
        <p>Coming soon</p>
      </div>

      {/* price section */}
      <div className="pt-4">
        <h3 className="text-xl text-gray-800  uppercase font-medium">Price</h3>
        <div className="mt-4 flex items-center">
          <input
            type="text"
            className="w-full border-primary focus:ring-0 border-2 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
            placeholder="min"
            value={minPrice}
            onChange={handleMinChange}
          />
          <span className="mx-3 text-gray-500">-</span>
          <input
            type="text"
            className="w-full border-primary focus:ring-0 border-2  focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
            placeholder="mix"
            value={maxPrice}
            onChange={handleMaxChange}
          />
        </div>
        <button onClick={handlePriceSubmit} className="btn mt-6 w-full">
          Set Price
        </button>
      </div>
      {/* <div className="py-4 border-b space-y-4">
        <h1 className="text-xl font-medium uppercase">Price</h1>
        <Box sx={{ width: 250 }}>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
        <h1>
          ${value[0]} - ${value[1]}
        </h1>
      </div> */}

      {/* size section */}
    </div>
  );
}

export default ShopSidebar;
