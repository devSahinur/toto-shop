import Head from "next/head";
// import Layout from "../../components/layout";
import { useRouter } from "next/router";
import SingleCard from "../../components/Home/TopNewArrival/SingleArrival";
import { ProductImage } from "../../components/ViewPage/ProductImage";
import { ProductContents } from "../../components/ViewPage/ProductContents";
import { ProductDetails } from "../../components/ViewPage/ProductDetails";

function view({ product, allData }) {
  const relatedProduct = allData.slice(0, 4);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{product.title} - ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={`${product.title} - ToToSHOP`}></meta>
        <meta name="description" content={product.shortDescription}></meta>
      </Head>
      {/* <Layout title={"no"}> */}
        {/* <!-- breadcrum --> */}
        <div className="py-4 container flex gap-3 items-center">
          <div
            onClick={() => router.push("/")}
            className="text-primary cursor-pointer text-base"
          >
            <i className="fas fa-home"></i>
          </div>
          <span className="text-sm text-gray-400">
            <i className="fas fa-chevron-right"></i>
          </span>
          <div
            onClick={() => router.push("/shop")}
            className="text-primary cursor-pointer text-base font-medium uppercase"
          >
            Shop
          </div>
          <span className="text-sm text-gray-400">
            <i className="fas fa-chevron-right"></i>
          </span>
          <p className="text-gray-600 font-medium uppercase">{product.title}</p>
        </div>
        {/* <!-- breadcrum end --> */}

        {/* <!-- product view --> */}
        <div className="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
          <ProductImage product={product} />
          <ProductContents product={product} />
        </div>
        <ProductDetails product={product} />
        {/* <!-- product view end --> */}

        {/* <!-- related products --> */}
        <div className="container pb-16">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
            related products
          </h2>
          {/* <!-- product wrapper --> */}
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            {relatedProduct?.map((product) => (
              <SingleCard key={product._id} product={product} />
            ))}
          </div>
          {/* <!-- product wrapper end --> */}
        </div>
        {/* <!-- related products end --> */}
      {/* </Layout> */}
    </>
  );
}

export default view;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  const data = await res.json();

  const resAll = await fetch("http://localhost:3000/api/product");
  const allData = await resAll.json();

  return {
    props: {
      product: data.data,
      allData: allData.data,
    },
  };
}
