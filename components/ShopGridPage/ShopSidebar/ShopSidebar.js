import { useState } from "react";
import ShopCategory from "./ShopCategory/ShopCategory";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { XIcon } from "@heroicons/react/solid";

function ShopSidebar({ fileterbtn, setShowSidebar }) {
  // all category
  const [woman, setWoman] = useState("");
  const [man, setman] = useState("");
  const [shoes, setShoes] = useState("");
  const [computer, setComputer] = useState("");

  // brands
  const [adidas, setAdidas] = useState("");
  const [nike, setNike] = useState("");
  const [easy, setEasy] = useState("");
  const [arong, setArong] = useState("");

  // for the price slider range
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  // for size
  const [size, setSize] = useState("M");
  const sizeHandler = (e) => {
    alert(e);
  };

  // COLOR PALET
  const [color, setColor] = useState("Red");
  const colorHandler = (e) => {
    alert(e);
  };

  return (
    <div
      className={`px-4 py-6 shadow-lg rounded-md border pl-6 h-fit ${
        !fileterbtn
          ? "hidden xl:block"
          : "absolute z-50 bg-white top-14 -left-4"
      }`}
    >
      {/* category */}
      <div className="pb-3 border-b space-y-4">
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-xl font-medium uppercase">Categories</h1>
          {setShowSidebar && (
            <XIcon
              onClick={() => setShowSidebar(false)}
              className="h-5 hover:text-primary text-gray-600 transform hover:scale-105 transition-all ease-in cursor-pointer"
            />
          )}
        </div>
        <ShopCategory setvalue={setWoman} category="Womem" number={16} />
        <ShopCategory setvalue={setman} category="Men" number={9} />
        <ShopCategory setvalue={setShoes} category="Shoes" number={19} />
        <ShopCategory setvalue={setComputer} category="Computer" number={35} />
      </div>

      {/* Brands */}
      <div className="py-4 border-b space-y-4">
        <h1 className="text-xl font-medium uppercase">Brands</h1>
        <ShopCategory setvalue={setAdidas} category="Adidas" />
        <ShopCategory setvalue={setNike} category="Nike" />
        <ShopCategory setvalue={setEasy} category="Easy" />
        <ShopCategory setvalue={setArong} category="Arong" />
      </div>

      {/* price section */}
      <div className="py-4 border-b space-y-4">
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
      </div>

      {/* size section */}
      <div className="py-4 border-b space-y-4">
        <h1 className="text-xl font-medium uppercase">Size</h1>
        <div className="flex items-center space-x-3">
          <span
            className="cursor-pointer text-xs px-2 py-1 border-2 rounded-md"
            onClick={() => sizeHandler("XS")}
          >
            XS
          </span>
          <span
            className="cursor-pointer text-xs px-2 py-1 border-2 rounded-md"
            onClick={() => sizeHandler("S")}
          >
            S
          </span>
          <span
            className="cursor-pointer text-xs px-2 py-1 border-2 rounded-md bg-primary text-white font-medium"
            onClick={() => sizeHandler("M")}
          >
            M
          </span>
          <span
            className="cursor-pointer text-xs px-2 py-1 border-2 rounded-md"
            onClick={() => sizeHandler("L")}
          >
            L
          </span>
          <span
            className="cursor-pointer text-xs px-2 py-1 border-2 rounded-md"
            onClick={() => sizeHandler("XL")}
          >
            XL
          </span>
        </div>
      </div>

      {/* colour section */}
      <div className="py-4 pb-2 space-y-4">
        <h1 className="text-xl font-medium uppercase">Color</h1>
        <div className="flex items-center space-x-3">
          <span
            className="cursor-pointer w-6 h-6 bg-red-600 border-2 border-gray-400 px-3 rounded-md"
            onClick={() => colorHandler("Red")}
          ></span>
          <span
            className="cursor-pointer w-6 h-6 bg-white border-2 border-gray-400 px-3 rounded-md"
            onClick={() => colorHandler("White")}
          ></span>
          <span
            className="cursor-pointer w-6 h-6 bg-black border-2 border-gray-400 px-3 rounded-md"
            onClick={() => colorHandler("Black")}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ShopSidebar;