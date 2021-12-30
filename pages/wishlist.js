import Breadcrum from "../components/commonComponents/Breadcrum";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SingleWishList from "../components/WishListPage/SingleWishList";
import WishListSidebar from "../components/WishListPage/WishListSidebar";

const product = [
  {
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
  },
  {
    id: 2,
    title: "GUYER CHAIR",
    totalReviews: 150,
    rating: 5,
    availability: false,
    totalQuantity: 0,
    image: [
      {
        id: 1,
        img: "https://i.ibb.co/2nfH6ZX/product6.jpg",
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
    price: 770,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis",
    longDescription:
      "Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video without dropping a frame .Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video without dropping a frame.Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro, make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so much more. That’s not just brain power — that’s the power of a full stack of ML technologies.",
    weight: "55kg",
    material: "Artificial Leather",
    color: "Black, Brown, Red",
  },
];

function wishlist() {
  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrum title={"MY ACCOUNT"} />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />

        {/* <!-- account content --> */}
        <div className="col-span-9 mt-6 lg:mt-0 space-y-4">
          {product.map((product) => (
            <SingleWishList product={product} key={product.id} />
          ))}
        </div>
        {/* <!-- account content end --> */}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default wishlist;
