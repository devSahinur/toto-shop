import { useRouter } from "next/router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

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
        <p className="text-gray-600 font-medium uppercase">
          Italian L Shape Sofa
        </p>
      </div>
      {/* <!-- breadcrum end --> */}

      
      <Footer />
      <Copyright />
    </>
  );
}

export default view;
