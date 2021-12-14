import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { ArrowRightIcon, HomeIcon, PlusIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Faq from "react-faq-component";
import ShoppingData from "../components/FaqPage/ShoppingFaqData/ShoppingFaqData";
import OrderData from "../components/FaqPage/OrderReturnFaqData/OrderFaqData";
import PaymentData from "../components/FaqPage/PaymentFaqData/PaymentFaqData";

function faq() {
  const config = {
    animate: true,
    arrowIcon: <PlusIcon />,
    tabFocus: true,
  };

  return (
    <div>
      <Header />
      <Navbar />
      {/* this is the main content */}
      <main className="max-w-[75rem] mx-auto px-4 py-6">
        {/* main content  top*/}
        <div className="px-1 md:px-8 space-y-6 max-w-[550px] pt-4 pb-10">
          <div className="flex items-center space-x-2 text-gray-800 text-sm sm:text-lg">
            <Link href="/">
              <HomeIcon className="h-4 md:h-6 cursor-pointer text-primary" />
            </Link>
            <ArrowRightIcon className="h-4 md:h-6 cursor-pointer" />
            <h3 className="font-light">FAQ</h3>
          </div>

          {/* bottom Details */}
          <h1 className="font-medium text-2xl md:text-3xl md:font-semibold">
            F.A.Q
          </h1>
          <p className="text-gray-700">
            Can’t find the answer you’re looking for? We’ve shared some of your
            most frequently asked questions to help you out!
          </p>
        </div>

        {/* faq wrapper */}
        <div className="px-6 max-w-5xl space-y-10">
          {/* shoping faq */}
          <div>
            <Faq
              data={ShoppingData}
              styles={{
                rowTitleColor: "#FD3D57",
                rowContentColor: "#777",
                rowContentPaddingLeft: "10px",
                arrowColor: "gray",
              }}
              config={config}
            />
          </div>

          {/* order Faq */}
          <div>
            <Faq
              data={OrderData}
              styles={{
                rowTitleColor: "#FD3D57",
                rowContentColor: "#777",
                rowContentPaddingLeft: "10px",
                arrowColor: "gray",
              }}
              config={config}
            />
          </div>

          {/* order Faq */}
          <div>
            <Faq
              data={PaymentData}
              styles={{
                rowTitleColor: "#FD3D57",
                rowContentColor: "#777",
                rowContentPaddingLeft: "10px",
                arrowColor: "gray",
              }}
              config={config}
            />
          </div>
        </div>
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default faq;
