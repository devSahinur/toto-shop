import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import OrderDetailsTop from "../../components/OrderDetails/OrderDetailsTop/OrderDetailsTop";
import OrderDetailsBottom from "../../components/OrderDetails/OrderDetailsBottom/OrderDetailsBottom";
import withAuth from "../../lib/withAuth";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Copyright from "../../components/Copyright";

// https://i.ibb.co/WzDxXQY/visa.png
// https://i.ibb.co/D8M3MPP/a-express.png

const orderHistory = [
  {
    id: 1,
    image: "https://i.ibb.co/WzDxXQY/visa.png",
    method: "American Express",
    defaultValue: true,
    lastFour: "0022",
    expires: "01/22",
  },
  {
    id: 2,
    image: "https://i.ibb.co/D8M3MPP/a-express.png",
    method: "Visa Card",
    defaultValue: false,
    lastFour: "0022",
    expires: "01/22",
  },
];

function OrderDetails() {
  return (
    <>
      {/* <Layout title={"Order Details"}> */}
      <Header />
      <Navbar />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />

        {/* <!-- account content --> */}
        <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
          {/* <!-- single card --> */}
          <OrderDetailsTop />
          <OrderDetailsBottom />
          {/* <!-- single card end --> */}
        </div>
        {/* <!-- account content end --> */}
      </div>
      {/* </Layout> */}
      <Footer />
      <Copyright />
    </>
  );
}

export default withAuth(OrderDetails);
