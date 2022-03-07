import { HomeIcon } from "@heroicons/react/solid";
import Head from "next/head";
import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner";
import MainFooter from "../components/commonComponents/MainFooter";
import MainHeader from "../components/commonComponents/MainHeader";
import ContactForm from "../components/ContactPage/ContactForm/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo/ContactInfo";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Us -ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Contact Us -ToTo SHOPe"></meta>
        <meta
          name="description"
          content="Use The Form Below To Get In Touch With The Sales Team"
        ></meta>
        <meta
          name="keywords"
          content="ToToSHOP Contact, totoshop Contact Us"
        ></meta>
        <meta property="og:title" content="Contact Us"></meta>
        <meta property="og:type" content="Product"></meta>
        <meta
          property="og:image"
          content="https://i.ibb.co/Vj9c5nh/logo.png"
        ></meta>
        <meta property="og:url" content="http://totoshop.tech/contact"></meta>
      </Head>
      <MainHeader BreadcrumbTitle="no" />
      <AboutBanner
        bg={"https://i.ibb.co/FhtxsfW/contat-banner-1.jpg"}
        Icon={HomeIcon}
        text="Contact Us"
      />

      {/* main content */}
      <main className="max-w-[75rem] mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 md:space-x-6 gap-y-12">
        {/* left */}
        <ContactForm />
        <ContactInfo />
      </main>
      <MainFooter />
    </>
  );
}

export default contact;
