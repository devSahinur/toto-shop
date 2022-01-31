import { HomeIcon } from "@heroicons/react/solid";
import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner";
import ContactForm from "../components/ContactPage/ContactForm/ContactForm";
import ContactInfo from "../components/ContactPage/ContactInfo/ContactInfo";
import Layout from "../components/layout";

function contact() {
  return (
    <div>
      <Layout title={"no"}>
        <AboutBanner
          bg={"https://i.ibb.co/VJKRqcn/contact-banner.jpg"}
          Icon={HomeIcon}
          text="Contact Us"
        />

        {/* main content */}
        <main className="max-w-[75rem] mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 md:space-x-6 gap-y-12">
          {/* left */}
          <ContactForm />
          <ContactInfo />
        </main>
      </Layout>
    </div>
  );
}

export default contact;
