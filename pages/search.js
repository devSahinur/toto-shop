import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { ArrowLeftIcon, XIcon, CursorClickIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function search({ product }) {
  const searchHandler = () => {
    alert("Search");
  };

  const [products, setProducts] = useState(product);
  const router = useRouter();

  // FIXME: input value
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input === "") return;
    setProducts(() =>
      product.filter(
        (item) =>
          item.title.toLocaleLowerCase().match(input.toLocaleLowerCase()) ||
          item.category.toLocaleLowerCase().match(input.toLocaleLowerCase())
      )
    );
  }, [input]);
  console.log(products);

  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);

    if (input.length > 0) {
      setProducts(product);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden">
      {/* TODO: search input */}
      <div className="bg-gradient-to-r from-primary via-pink-300  to-pink-700 flex items-center px-5 py-3 justify-between relative z-10">
        <ArrowLeftIcon
          className="h-5 text-white cursor-pointer"
          onClick={() => router.back()}
        />
        <input
          type="text"
          placeholder="Search in TotoShop"
          className="flex-1 mx-4 bg-transparent outline-none placeholder-gray-200 placeholder:text-sm text-white"
          value={input}
          onChange={inputHandler}
        />
        {/* TODO: close icon and button */}
        <div className="flex items-center space-x-2">
          <XIcon
            className="h-5 text-white cursor-pointer"
            onClick={() => setInput("")}
          />
          <button
            className="text-white text-sm font-poppins font-semibold cursor-pointer"
            onClick={searchHandler}
          >
            SEARCH
          </button>
        </div>

        {/* To show this result */}
        <div className="absolute top-14 left-0 w-full overflow-x-hidden">
          {input && (
            <>
              {/* another div */}
              {!products.length > 0 ? (
                <div className="flex items-center justify-center text-center min-h-screen">
                  <h1
                    className="text-2xl text-primary font-semibold"
                    onClick={() => setInput("")}
                  >
                    Type Another Keyword 🤔
                  </h1>
                </div>
              ) : (
                <div className="px-8 space-y-3">
                  {products?.map((item) => {
                    const truncateTitle =
                      item.title.length > 10
                        ? `${item.title.substring(0, 9)}...`
                        : item.title;
                    return (
                      <li
                        className="list-none flex items-center justify-between border-b px-2 py-1 hover:bg-gray-200 transition-all ease-in-out cursor-pointer"
                        key={item._id}
                        onClick={() => router.push(`/product/${item._id}`)}
                      >
                        <p className="text-sm font-semibold text-gray-700">
                          {" "}
                          {truncateTitle}
                        </p>
                        <CursorClickIcon className="h-5 text-gray-600" />
                      </li>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  return {
    props: {
      product: data?.data,
    },
  };
}
