import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner";
import { HomeIcon } from "@heroicons/react/solid";
import OurHistory from "../components/AboutPage/ourHIstoy/OurHistory";
import OurVision from "../components/AboutPage/ourVision/OurVision";
import OurTeam from "../components/AboutPage/ourTeam/OurTeam";
import OurCompany from "../components/AboutPage/ourCompany/OurCompany";
import Layout from "../components/layout";

function about() {
  return (
    <div>
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
    </div>
  );
}

export default about;
