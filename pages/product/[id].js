import Layout from "../../components/layout";
import { useRouter } from "next/router";
import SingleCard from "../../components/Home/TopNewArrival/SingleArrival";
import { ProductImage } from "../../components/ViewPage/ProductImage";
import { ProductContents } from "../../components/ViewPage/ProductContents";
import { ProductDetails } from "../../components/ViewPage/ProductDetails";

const related = [
  {
    id: 1,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/n3jvf6V/product8.jpg",
  },
  {
    id: 2,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/TBzx17p/product9.jpg",
  },
  {
    id: 3,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/HtTYwjV/product12.jpg",
  },
  {
    id: 4,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/2jHpJws/product1.jpg",
  },
];

function view({ product }) {
  const router = useRouter();
  return (
    <>
      <Layout title={"no"}>
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
            {related?.map((product) => (
              <SingleCard key={product.id} product={product} />
            ))}
          </div>
          {/* <!-- product wrapper end --> */}
        </div>
        {/* <!-- related products end --> */}
      </Layout>
    </>
  );
}

export default view;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/product/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
}
