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

export default function Home() {
  return (
    <div>
      <Head>
        <title>ToTo Shop</title>
        <link rel="icon" href="/favicon.ico" />
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

      <Footer />
      <Copyright />
    </div>
  );
}
