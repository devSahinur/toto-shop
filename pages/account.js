import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Breadcrum from "../components/commonComponents/Breadcrum";
import WishListSidebar from "../components/WishListPage/WishListSidebar";
import AccuntSingleCard from "../components/Account/AccuntSingleCard";

function account() {
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
          <AccuntSingleCard name= 'Personal profile' />
          <AccuntSingleCard name='Shipping Address' />
          <AccuntSingleCard name ='' />
          {/* <!-- single card end --> */}
        </div>
        {/* <!-- account content end --> */}
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default account;
