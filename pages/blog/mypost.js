import Head from "next/head";
import React, { useEffect, useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import BlogPost from "../../components/BlogPage/BlogPost/BlogPost";
import BlogSideBar from "../../components/BlogPage/BlogSidebar/BlogSideBar";
import MainFooter from "../../components/commonComponents/MainFooter";
import MainHeader from "../../components/commonComponents/MainHeader";

function myPost() {
  let [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  console.log(posts);

  useEffect(async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(data?.data);
    setLoading(false);
  }, []);
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
      <MainHeader BreadcrumbTitle="Blog" />

      <main className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <BlogSideBar />
        <div className="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
          {posts?.map((post) => (
            <BlogPost key={post?._id} post={post} />
          ))}
        </div>
      </main>
      <MainFooter />
    </>
  );
}

export default myPost;
