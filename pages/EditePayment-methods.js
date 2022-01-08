import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Breadcrum from "../components/commonComponents/Breadcrum";
import WishListSidebar from "../components/WishListPage/WishListSidebar";
import AccuntSingleCard from "../components/Account/AccuntSingleCard";
import SinglePaymentCard from "../components/PaymentMethod/SinglePaymentCard/SinglePaymentCard";
import EditePaymentFrom from "../components/EditePaymentmethod/EditePaymentFrom/EditePaymentFrom";

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

function EditePaymentMethods() {
  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrum title={"My Account"} second={"Edit Payment Method"} />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />

        {/* <!-- account content --> */}
        <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
          {/* <!-- single card --> */}
          <EditePaymentFrom />
          {/* <!-- single card end --> */}
        </div>
        {/* <!-- account content end --> */}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default EditePaymentMethods;
