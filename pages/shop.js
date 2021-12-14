import { ArrowRightIcon, HomeIcon } from "@heroicons/react/solid";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";
import ShopSidebar from "../components/ShopGridPage/ShopSidebar/ShopSidebar";
import ShopContent from "../components/ShopGridPage/ShopContent/ShopContent";

function ShopGrid() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* main-Content */}

      <main className="sm:max-w-[70rem] xl:max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-6">
        <div className="flex items-center sm:space-x-4 space-x-2 py-6">
          <Link href="/">
            <HomeIcon className="h-4 sm:h-5 cursor-pointer text-primary" />
          </Link>
          <ArrowRightIcon className="h-4 sm:h-5 cursor-pointer" />
          <h3 className="font-light sm:text-xl">Privacy And Policy</h3>
        </div>

        {/* content Main */}

        <div className="flex xl:space-x-10">
          <ShopSidebar />
          <ShopContent />
        </div>
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default ShopGrid;
