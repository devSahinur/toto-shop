import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Breadcrum from "../../components/commonComponents/Breadcrum";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import AccuntSingleCard from "../../components/Account/AccuntSingleCard";
import SingleOrderHistory from "../../components/OrderHistory/SingleOrderHistory/SingleOrderHistory";

// https://i.ibb.co/D5kM6Hb/headphone-3.png
// https://i.ibb.co/kDYYgSr/tv.png
// https://i.ibb.co/k1X4DXy/laptop-1.png

const orderHistory = [
  {
    id: 1,
    image: [
      "https://i.ibb.co/kDYYgSr/tv.png",
      "https://i.ibb.co/kDYYgSr/tv.png",
    ],
    orderNumber: "23E34R13",
    date: "01 March 2021",
    quantity: 3,
    total: 120,
    status: false,
  },
  {
    id: 2,
    image: [
      "https://i.ibb.co/D5kM6Hb/headphone-3.png",
      "https://i.ibb.co/D5kM6Hb/headphone-3.png",
    ],
    orderNumber: "23E34R13",
    date: "01 March 2021",
    quantity: 3,
    total: 120,
    status: true,
  },
  {
    id: 3,
    image: [
      "https://i.ibb.co/k1X4DXy/laptop-1.png",
      "https://i.ibb.co/k1X4DXy/laptop-1.png",
      "https://i.ibb.co/k1X4DXy/laptop-1.png",
    ],
    orderNumber: "23E34R13",
    date: "01 March 2021",
    quantity: 3,
    total: 120,
    status: false,
  },
];

function OrderHistory() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrum title={"MY ACCOUNT"} />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />

        {/* <!-- account content --> */}
        <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
          {/* <!-- single card --> */}
          {orderHistory?.map(
            ({ id, image, orderNumber, date, quantity, total, status }) => (
              <SingleOrderHistory
                key={id}
                id={id}
                image={image}
                orderNumber={orderNumber}
                date={date}
                quantity={quantity}
                total={total}
                status={status}
              />
            )
          )}
          {/* <!-- single card end --> */}
        </div>
        {/* <!-- account content end --> */}
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default OrderHistory;
