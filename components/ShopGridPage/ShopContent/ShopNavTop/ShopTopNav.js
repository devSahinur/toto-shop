import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/outline";
import { ClipboardListIcon, DuplicateIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import sortTitles from "../../../../lib/sortTitles";
import ShopSidebar from "../../ShopSidebar/ShopSidebar";

function ShopTopNav({ listView, setListView }) {
  const router = useRouter();
  const [showSelect, setShowSelect] = useState(false);
  const [sorting, setShorting] = useState(`${sortTitles?.[0]}`);
  const [showSidebar, setShowSidebar] = useState(false);

  const setShort = (e) => {
    setShorting(e);
    setShowSelect(false);
  };

  return (
    <div className="flex items-center z-50 justify-between pb-6  pt-4">
      {/* for small screen icon */}
      <div className="xl:hidden relative">
        <button className="btn" onClick={() => setShowSidebar(!showSidebar)}>
          Filter
        </button>
        {/* mobile side bar */}
        <div>
          {showSidebar && (
            <ShopSidebar fileterbtn setShowSidebar={setShowSidebar} />
          )}
        </div>
      </div>

      {/* default sorting */}
      <div className="flex items-center px-4 py-3 border-2 cursor-pointer rounded-md space-x-8 relative">
        <div
          className="flex items-center space-x-6"
          onClick={() => setShowSelect(!showSelect)}
        >
          <h3>{sorting}</h3>
          {showSelect ? (
            <ChevronUpIcon className="h-4 text-gray-600" />
          ) : (
            <ChevronDownIcon className="h-4 text-gray-600" />
          )}
        </div>
        {/* default sorting  */}
        {showSelect && (
          <div
            className="absolute top-12 -left-[2rem] bg-white border-2 w-full rounded-md"
            style={{ zIndex: 100 }}
          >
            {sortTitles.map((text) => (
              <p
                key={text}
                onClick={() => setShort(`${text}`)}
                className="px-4 py-3 bg-gray-200 cursor-pointer font-semibold"
              >
                <Link
                  href={{
                    pathname: "/shop",
                    query: { ...router.query, sort: text },
                  }}
                >
                  <a>{text}</a>
                </Link>
              </p>
            ))}
          </div>
        )}
      </div>

      {/* right icon box */}
      <div className="flex items-center space-x-4">
        <DuplicateIcon
          onClick={() => setListView(false)}
          className={`w-[40px] rounded-md shadow px-2 py-2 ${
            !listView
              ? "bg-primary text-white"
              : "border-2 bg-transparent text-primary border-primary"
          } h-[40px]  text-xl cursor-pointer`}
        />
        <ClipboardListIcon
          onClick={() => setListView(true)}
          className={`w-[40px] rounded-md shadow px-2 py-2 ${
            listView
              ? "bg-primary text-white"
              : "border-2 bg-transparent text-primary border-primary"
          } h-[40px]  text-xl cursor-pointer`}
        />
      </div>
    </div>
  );
}

export default ShopTopNav;
