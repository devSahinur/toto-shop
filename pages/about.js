import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner";
import { HomeIcon } from "@heroicons/react/solid";
import OurHistory from "../components/AboutPage/ourHIstoy/OurHistory";
import OurVision from "../components/AboutPage/ourVision/OurVision";
import OurTeam from "../components/AboutPage/ourTeam/OurTeam";
import OurCompany from "../components/AboutPage/ourCompany/OurCompany";
import Head from "next/head";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function about() {
  return (
    <>
      <Head>
        <title>About Us - ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="We design and delever our customers' degital transformation by bringing together their vision with our industry knowledge and deep technologcal expertise. We design and delever our customers' degital transformmation"
        ></meta>
      </Head>
      <Header />
      <Navbar />
      {/* about Banner components */}
      <AboutBanner
        bg={"https://i.ibb.co/FhtxsfW/contat-banner-1.jpg"}
        Icon={HomeIcon}
        text="About us"
      />
      {/* <AboutBanner bg={'/img/contact-banner.jpg'} Icon={HomeIcon} text='About us' /> */}
      {/* main-Content */}
      <div className="max-w-[75rem] mx-auto px-4 py-6">
        <OurHistory />
        <OurVision />
        <OurTeam />
        <OurCompany />
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default about;
