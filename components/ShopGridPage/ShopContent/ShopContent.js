import { useState } from "react";
import ShopMain from "./ShopMain/ShopMain";
import ShopTopNav from "./ShopNavTop/ShopTopNav";
import ShopList from "../ShopContent/ShopList/ShopList";

function ShopContent({ currentItems }) {
  const [listView, setListView] = useState(false);
  // const [pagenation,setPagenation] = useState()

  return (
    <div className="flex-grow max-w-[950px]">
      <ShopTopNav listView={listView} setListView={setListView} />

      {/* render the view */}
      <div className="max-w[400px] mx-auto">
        {listView ? (
          <ShopList currentItems={currentItems} />
        ) : (
          <ShopMain currentItems={currentItems} />
        )}

        {/* pagenation */}
        <div className="w-fit mx-auto pt-10 pb-6">
          {" "}
          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </a>

            <a
              href="#"
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            >
              1
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            >
              2
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
            >
              3
            </a>
            <a
              href="#"
              className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopContent;
