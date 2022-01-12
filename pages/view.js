import { useRouter } from "next/router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { ProductImage } from "../components/ViewPage/ProductImage";
import { ProductContents } from "../components/ViewPage/ProductContents";
import { ProductDetails } from "../components/ViewPage/ProductDetails";
import SingleCard from "../components/Home/TopNewArrival/SingleArrival";

const product = {
  id: 1,
  title: "Italian L Shape Sofa",
  totalReviews: 150,
  rating: 5,
  availability: true,
  totalQuantity: 56,
  image: [
    {
      id: 1,
      img: "https://i.ibb.co/YkyXnM0/product9.jpg",
    },
    {
      id: 2,
      img: "https://i.ibb.co/pWVdqv9/product10.jpg",
    },
    {
      id: 3,
      img: "https://i.ibb.co/njx91TW/product11.jpg",
    },
    {
      id: 4,
      img: "https://i.ibb.co/C0sgrrx/product1.jpg",
    },
    {
      id: 5,
      img: "https://i.ibb.co/txrkhHL/product8.jpg",
    },
  ],
  brand: "Apex",
  category: "Sofa",
  sku: "BE45VGT",
  price: 450,
  shortDescription:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis",
  longDescription:
    "Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video without dropping a frame .Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video without dropping a frame.Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro, make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so much more. That’s not just brain power — that’s the power of a full stack of ML technologies.",
  weight: "55kg",
  material: "Artificial Leather",
  color: "Black, Brown, Red",
};

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

function view() {
  const router = useRouter();
  return (
    <>
      <Header />
      <Navbar />
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
          {related.map((product) => (
            <SingleCard key={product.id} product={product} />
          ))}
        </div>
        {/* <!-- product wrapper end --> */}
      </div>
      {/* <!-- related products end --> */}

      <Footer />
      <Copyright />
    </>
  );
}

export default view;
