import AddProductImage from "../components/AddProduct/AddProductImage";
import AddProductInput from "../components/AddProduct/AddProductInput";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function addProduct() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* main-Content */}
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
        Add Product
      </div>

      <main className="sm:max-w-[70rem] xl:max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-6">
        {/* content Main */}

        <div className="grid grid-cols-1 space-y-5  md:grid-cols-2 md:space-x-5">
          <AddProductInput />
          <AddProductImage />
        </div>
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default addProduct;
