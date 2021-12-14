import { ArrowRightIcon, HomeIcon } from "@heroicons/react/solid";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";
import ShopSidebar from "../components/ShopGridPage/ShopSidebar/ShopSidebar";
import ShopContent from "../components/ShopGridPage/ShopContent/ShopContent";
import { useRouter } from "next/router";

function ShopGrid() {
  const router = useRouter();
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
        Shop
      </div>

      <main className="sm:max-w-[70rem] xl:max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-6">

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
