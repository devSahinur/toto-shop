import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner";
import { HomeIcon } from "@heroicons/react/solid";
import OurHistory from "../components/AboutPage/ourHIstoy/OurHistory";
import OurVision from "../components/AboutPage/ourVision/OurVision";
import OurTeam from "../components/AboutPage/ourTeam/OurTeam";
import OurCompany from "../components/AboutPage/ourCompany/OurCompany";
import Layout from "../components/layout";
import Head from "next/head";

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
      <Layout title={"no"}>
        {/* about Banner components */}
        <AboutBanner
          bg={"https://i.ibb.co/VJKRqcn/contact-banner.jpg"}
          Icon={HomeIcon}
          text="About us"
        />
        {/* <AboutBanner bg={'/img/contact-banner.jpg'} Icon={HomeIcon} text='About us' /> */}
        {/* main-Content */}
        <main className="max-w-[75rem] mx-auto px-4 py-6">
          <OurHistory />
          <OurVision />
          <OurTeam />
          <OurCompany />
        </main>
      </Layout>
    </>
  );
}

export default about;
