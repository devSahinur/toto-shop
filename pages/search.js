import { ArrowLeftIcon, XIcon, CursorClickIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MobileMenubar from "../components/MobileMenubar";

function search({ product }) {
  const [products, setProducts] = useState(product);
  const router = useRouter();

  // FIXME: input value
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword === "") return;
    setProducts(() =>
      product.filter(
        (item) =>
          item.title.toLocaleLowerCase().match(keyword.toLocaleLowerCase()) ||
          item.category.toLocaleLowerCase().match(keyword.toLocaleLowerCase())
      )
    );
  }, [keyword]);

  const inputHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);

    if (keyword.length > 0) {
      setProducts(product);
    }
  };

  return (
    <>
      <MobileMenubar />
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
            value={keyword}
            onChange={inputHandler}
          />
          {/* TODO: close icon and button */}
          <div className="flex items-center space-x-2">
            <XIcon
              className="h-5 text-white cursor-pointer"
              onClick={() => setKeyword("")}
            />
            <Link
              href={{
                pathname: "/shop",
                query: { ...router.query, keyword },
              }}
            >
              <button className="text-white text-sm font-poppins font-semibold cursor-pointer">
                SEARCH
              </button>
            </Link>
          </div>

          {/* To show this result */}
          <div className="absolute top-14 left-0 w-full overflow-x-hidden">
            {keyword && (
              <>
                {/* another div */}
                {!products.length > 0 ? (
                  <div className="flex items-center justify-center text-center min-h-screen">
                    <h1
                      className="text-2xl text-primary font-semibold"
                      onClick={() => setKeyword("")}
                    >
                      Type Another Keyword 🤔
                    </h1>
                  </div>
                ) : (
                  <div className="px-8 space-y-3">
                    {products?.map((item) => {
                      const truncateTitle =
                        item.title.length > 20
                          ? `${item.title.substring(0, 20)}...`
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

        <h1>hellow</h1>
      </div>
    </>
  );
}

export default search;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.HOST}/api/product`);
  const data = await res.json();
  return {
    props: {
      product: data?.data,
    },
  };
}
