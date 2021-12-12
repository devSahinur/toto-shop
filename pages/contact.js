import { HomeIcon } from "@heroicons/react/solid"
import AboutBanner from "../components/AboutPage/AboutBanner/AboutBanner"
import ContactForm from "../components/ContactPage/ContactForm/ContactForm"
import ContactInfo from "../components/ContactPage/ContactInfo/ContactInfo"
import Copyright from "../components/Copyright"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

function contact() {
    return (
        <div>
            <Header />
            <Navbar />
                {/* about Banner components */}
                {/* <AboutBanner bg={'/img/contact-banner.jpg'} Icon={HomeIcon} text='Contact Us' /> */}
                <AboutBanner bg={'https://i.ibb.co/VJKRqcn/contact-banner.jpg'} Icon={HomeIcon} text='Contact Us' />

                {/* main content */}
                <main className='max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 md:space-x-6 gap-y-12'>
                    {/* left */}
                    <ContactForm />
                    <ContactInfo />
                </main>


            <Footer />
            <Copyright />
        </div>
    )
}

export default contact
