import Head from "next/head";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Categories } from "../components/Home/Categories/Categories";
import { TopNewArrival } from "../components/Home/TopNewArrival/TopNewArrival";
import { MiddleAds } from "../components/Home/MiddleAds";
import { RecomendedProduct } from "../components/Home/RecomendedProduct/RecomendedProduct";
import { useEffect, useState } from "react";
import Modal from "../components/Home/Modal/Modal";

export default function Home() {
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 3000);
  // }, []);

  return (
    <div>
      <Head>
        <title>ToToSHOP - Online Shopping Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta name="description" content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"></meta>
      </Head>
      <Header />
      <Navbar />

      <main>
        <Banner />
        <Features />
        <Categories />
        <TopNewArrival />
        <MiddleAds />
        <RecomendedProduct />
      </main>

      {/* for show the modal */}
      {/* {showModal && <Modal setShowModal={setShowModal} />} */}

      <Footer />
      <Copyright />
    </div>
  );
}
