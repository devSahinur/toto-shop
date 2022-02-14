import { HomeIcon } from "@heroicons/react/solid";
import Head from "next/head";
import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner";
import ContactForm from "../components/ContactPage/ContactForm/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo/ContactInfo";
// import Layout from "../components/layout";
 
function contact() {
  return (
    <>
      <Head>
        <title>Contact Us -ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Use The Form Below To Get In Touch With The Sales Team"
        ></meta>
      </Head>
      {/* <Layout title={"no"}> */}
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
      {/* </Layout> */}
    </>
  );
}

export default contact;
