import Head from "next/head";
import { CheckIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
// import Layout from "../components/layout";
import { shootFireworks } from "../lib/successEffect";

function success() {
  useEffect(() => {
    shootFireworks();
  }, []);
  return (
    <>
      <Head>
        <title>Thanks for your order! - ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      {/* <Layout title={"no"}> */}
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
          <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
            <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
              <CheckIcon className="w-12 h-12 flex-shrink-0 text-green-600" />
              <span>Thanks for your order!</span>
            </h2>
            <p className="text-lg mt-3">Check your inbox for the receipt.</p>
          </div>
        </div>
      {/* </Layout> */}
    </>
  );
}

export default success;
