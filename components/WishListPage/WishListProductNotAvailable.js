import Image from "next/image";
import Link from "next/link";
import Copyright from "../Copyright";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import WishListSidebar from "./WishListSidebar";

function WishListProductNotAvailable() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />
        <div className="col-span-9 mt-6 lg:mt-0 space-y-4">
          <Image
            src="https://i.ibb.co/Gt2LmrF/empty-wishlist.png"
            width={800}
            height={370}
          />
          <Link href="/">
            <a className="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded uppercase font-roboto font-medium">
              back to home
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
          <Footer/>
      </div>
      <Copyright />
    </>
  );
}

export default WishListProductNotAvailable;
