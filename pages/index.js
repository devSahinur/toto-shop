import Head from "next/head";
import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import { Categories } from "../components/Home/Categories/Categories";
import { TopNewArrival } from "../components/Home/TopNewArrival/TopNewArrival";
import { MiddleAds } from "../components/Home/MiddleAds";
import { RecomendedProduct } from "../components/Home/RecomendedProduct/RecomendedProduct";
import { useEffect, useState } from "react";
import Modal from "../components/Home/Modal/Modal";
import MainHeader from "../components/commonComponents/MainHeader";
import MainFooter from "../components/commonComponents/MainFooter";

export default function Home({ products }) {
  const [showModal, setShowModal] = useState();

  useEffect(() => {
    const modalData = window.sessionStorage.getItem("showModal");
    setShowModal(modalData);
  }, []);

  return (
    <>
      <Head>
        <title>ToTo SHOP - Online Shopping Website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      <MainHeader BreadcrumbTitle="no" />
      <main>
        <Banner />
        <Features />
        <Categories />
        <TopNewArrival products={products} />
        <MiddleAds />
        <RecomendedProduct products={products} />
      </main>
      {/* Modal Show */}
      {/* {!showModal && <Modal setShowModal={setShowModal} />} */}
      <MainFooter />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.HOST}/api/product`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}
