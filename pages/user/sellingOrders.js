import AddProductImage from "../../components/AddProduct/AddProductImage";
import AddProductInput from "../../components/AddProduct/AddProductInput";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrum from "../../components/commonComponents/Breadcrum";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import Copyright from "../../components/Copyright";

function addProduct() {
  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrum title={"Add Product"} />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />

        {/* <!-- account content --> */}
        <main className="col-span-9 px-5 md:px-8 py-6 space-y-6">
          {/* content Main */}

          <div className="grid grid-cols-1 space-y-5  md:grid-cols-2 md:space-x-5">
            <AddProductInput />
            <AddProductImage />
          </div>
        </main>
        {/* <!-- account content end --> */}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
}

export default addProduct;
