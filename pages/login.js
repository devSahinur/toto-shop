import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { Register } from "../components/Auth/Register";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
// import Layout from "../components/layout";

function login() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.back();
  }
  return (
    <>
      <Head>
        <title>Login | ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      {/* <Layout title={"no"}> */}
      <Header/>
      <Navbar/>
        <main>
          <Register />
        </main>
      {/* </Layout> */}
      <Footer/>
      <Copyright/>
    </>
  );
}

export default login;
