import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { HomeIcon } from "@heroicons/react/solid";
import OurHistory from "../components/AboutPage/ourHIstoy/OurHistory";
import OurVision from "../components/AboutPage/ourVision/OurVision";
import OurTeam from "../components/AboutPage/ourTeam/OurTeam";
import OurCompany from "../components/AboutPage/ourCompany/OurCompany";

function about() {
  return (
    <div>
      <Header />
      <Navbar />

      {/* about Banner components */}
      <AboutBanner
        bg={"https://i.ibb.co/VJKRqcn/contact-banner.jpg"}
        Icon={HomeIcon}
        text="About us"
      />
      {/* <AboutBanner bg={'/img/contact-banner.jpg'} Icon={HomeIcon} text='About us' /> */}
      {/* main-Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <OurHistory />
        <OurVision />
        <OurTeam />
        <OurCompany />
      </main>
      <Footer />
      <Copyright />
    </div>
  );
}

export default about;
