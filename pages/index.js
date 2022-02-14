import Head from "next/head";
import Banner from "../components/Home/Banner";
import Features from "../components/Home/Features";
import { Categories } from "../components/Home/Categories/Categories";
import { TopNewArrival } from "../components/Home/TopNewArrival/TopNewArrival";
import { MiddleAds } from "../components/Home/MiddleAds";
import { RecomendedProduct } from "../components/Home/RecomendedProduct/RecomendedProduct";
import { useEffect, useState } from "react";
import Modal from "../components/Home/Modal/Modal";
import Layout from "../components/layout";

export default function Home({ products }) {
  // const [showModal, setShowModal] = useState(false);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true);
  //   }, 3000);
  // }, []);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data.data));
  // }, []);

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
      {/* <Layout title={"no"}> */}
        <main>
          <Banner />
          <Features />
          <Categories />
          <TopNewArrival products={products} />
          <MiddleAds />
          <RecomendedProduct products={products} />
        </main>
        {/* for show the modal */}
        {/* {showModal && <Modal setShowModal={setShowModal} />} */}
      {/* </Layout> */}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}
