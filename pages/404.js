import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { ArrowRightIcon, HomeIcon } from "@heroicons/react/solid";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
function Custom404() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <Navbar />
      {/* <AboutBanner bg={'/img/contact-banner.jpg'} Icon={HomeIcon} text='About us' /> */}
      {/* main-Content */}

      <main className="sm:max-w-[50rem] xl:max-w-[75rem] mx-auto px-5 md:px-8 py-6 space-y-6">
        {/* bottom containt */}
        <div className="max-w-[55rem] mx-auto px-4 py-6 pt-0 flex items-center justify-center flex-col space-y-5">
          <div className="w-full">
            <Image src="/notfound.svg" width={800} height={400} />
          </div>

          <div className="py-4 text-center font-medium">
            <h1 className="text-xl md:text-2xl xl:text-3xl md:font-semibold pb-8">
              THE PAGE YOU'VE REQUESTED IS NOT AVAILABLE
            </h1>
            <div onClick={() => router.push("/")} className="btn cursor-pointer uppercase">
              Back to Home
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default Custom404;
