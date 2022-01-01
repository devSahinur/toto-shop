import Breadcrum from "../components/commonComponents/Breadcrum";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SingleReturnOrder from "../components/OrderReturn/SingleReturnOrder/SingleReturnOrder";
import SingleWishList from "../components/WishListPage/SingleWishList";
import WishListSidebar from "../components/WishListPage/WishListSidebar";

const product = [
  {
    id: 1,
    title: "Herschel Leather Duffle Bag",
    totalReviews: 150,
    rating: 5,
    availability: true,
    totalQuantity: 56,
    // this is faysal work
    orderNum: true,
    orderNumbers: "798W4E574",
    returnStatus: true,
    viewOrder: true,
    // this is my end order

    // for review page
    write: true,
    purchesed: "16 Dec 2020",
    rating: 1,
    // for review page end info
    image: [
      {
        id: 1,
        img: "https://i.ibb.co/48y04qH/bag-2.png",
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
      {
        id: 6,
        img: "https://i.ibb.co/48y04qH/bag-2.png",
      },
    ],
    brand: "Apex",
    category: "Sofa",
    sku: "BE45VGT",
    price: 55,
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
    title: "Xbox One Wireless Controll",
    totalReviews: 150,
    rating: 5,
    availability: false,
    totalQuantity: 0,
    // this is faysal work
    orderNum: true,
    orderNumbers: "798W4E574",
    returnStatus: true,
    viewOrder: true,
    // this is my end order

    // for review page
    write: true,
    purchesed: "16 Dec 2020",
    rating: 1,
    // for review page end info
    image: [
      {
        id: 1,
        img: "https://i.ibb.co/9ny7wzQ/headphone-3.png",
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
    price: 200,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis",
    longDescription:
      "Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video without dropping a frame .Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video without dropping a frame.Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro, make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so much more. That’s not just brain power — that’s the power of a full stack of ML technologies.",
    weight: "55kg",
    material: "Artificial Leather",
    color: "Black, Brown, Red",
  },
  ,
  {
    id: 2,
    title: "Sound Intone I65 Earphone",
    totalReviews: 150,
    rating: 5,
    availability: false,
    totalQuantity: 0,
    // this is faysal work
    orderNum: true,
    orderNumbers: "798W4E574",
    returnStatus: false,
    viewOrder: true,
    // this is my end order

    // for review page
    write: true,
    purchesed: "16 Dec 2020",
    rating: 1,
    // for review page end info
    image: [
      {
        id: 1,
        img: "https://i.ibb.co/G9K5rTG/x-box.png",
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
    price: 59,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat excepturi labore blanditiis",
    longDescription:
      "Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video without dropping a frame .Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than ever. For the first time, content creators can edit and seamlessly play back multiple streams of full‑quality 4K video without dropping a frame.Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro, make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so much more. That’s not just brain power — that’s the power of a full stack of ML technologies.",
    weight: "55kg",
    material: "Artificial Leather",
    color: "Black, Brown, Red",
  },
];

function ReturnOrder() {
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
            <SingleReturnOrder product={product} key={product.id} />
          ))}
        </div>
        {/* <!-- account content end --> */}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default ReturnOrder;
