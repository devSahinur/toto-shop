import Breadcrum from "../components/commonComponents/Breadcrum";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import WishListSidebar from "../components/WishListPage/WishListSidebar";

function ManageAddress() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrum title={"MY ACCOUNT"} />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />

        {/* <!-- account content --> */}
        <div className="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
          {/* <!-- single card --> */}
         <h1>hello</h1>
          {/* <!-- single card end --> */}
        </div>
        {/* <!-- account content end --> */}
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default ManageAddress;
