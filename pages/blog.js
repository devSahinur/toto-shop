import Head from "next/head";
import BlogSideBar from "../components/BlogPage/BlogSidebar/BlogSideBar";
import BlogContent from "../components/BlogPage/BlogContent/BlogContent";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog - ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      {/* <Layout title={"blog"}> */}
      <Header />
      <Navbar />
      <main className="max-w-5xl mx-auto px-5 md:px-8 py-6 space-y-6">
        {/* content Main */}

        <div className="md:flex md:space-x-5 xl:space-x-10">
          <BlogSideBar />
          <BlogContent />
        </div>
      </main>
      {/* </Layout> */}
      <Footer />
      <Copyright />
    </>
  );
};

export default blog;
