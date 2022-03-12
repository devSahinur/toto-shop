import Head from "next/head";
import BlogSideBar from "./../../components/BlogPage/BlogSidebar/BlogSideBar";
import MainFooter from "./../../components/commonComponents/MainFooter";
import MainHeader from "./../../components/commonComponents/MainHeader";
import BlogPost from "../../components/BlogPage/BlogPost/BlogPost";
import BlogModal from "../../components/BlogPage/BlogModal";
import { useState } from "react";

const data = [
  {
    id: "1",
    userImage: "https://i.ibb.co/4Rd309K/user-img.png",
    userEmail: "infosahinur@gmail.com",
    userName: "Sahinur Islam",
    postImage: "https://i.ibb.co/DQ5nnH7/71-Pbp-B-Cff-L-AC-SL1500.jpg",
    description:
      "Chares and much of the layout of Newcastle's Quayside date from medieval times. At one point, there were 20 chares in Newcastle. After the great fire of Newcastle and Gateshead in 1854, a number of the chares were permanently removed although many remain in existence today. Chares also are still present in the higher parts of the city centre.",
    title: "Chares destroyed by the Great Fire",
    slug: "chares-destroyed-by-the-Great-Fire",
  },
  {
    id: "2",
    userImage: "https://i.ibb.co/4Rd309K/user-img.png",
    userEmail: "infosahinur@gmail.com",
    userName: "Sahinur Islam",
    postImage: "https://i.ibb.co/DQ5nnH7/71-Pbp-B-Cff-L-AC-SL1500.jpg",
    description:
      "Chares and much of the layout of Newcastle's Quayside date from medieval times. At one point, there were 20 chares in Newcastle. After the great fire of Newcastle and Gateshead in 1854, a number of the chares were permanently removed although many remain in existence today. Chares also are still present in the higher parts of the city centre.",
    title: "Chares destroyed by the Great Fire",
    slug: "chares-destroyed-by-the-Great-Fire",
  },
  {
    id: "3",
    userImage: "https://i.ibb.co/4Rd309K/user-img.png",
    userEmail: "infosahinur@gmail.com",
    userName: "Sahinur Islam",
    postImage: "https://i.ibb.co/DQ5nnH7/71-Pbp-B-Cff-L-AC-SL1500.jpg",
    description:
      "Chares and much of the layout of Newcastle's Quayside date from medieval times. At one point, there were 20 chares in Newcastle. After the great fire of Newcastle and Gateshead in 1854, a number of the chares were permanently removed although many remain in existence today. Chares also are still present in the higher parts of the city centre.",
    title: "Chares destroyed by the Great Fire",
    slug: "chares-destroyed-by-the-Great-Fire",
  },
];

function index() {
  const [showModal, setShowModal] = useState(false);
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
          <div
            onClick={() => setShowModal(true)}
            className="px-4 cursor-pointer flex mx-auto col-span-2 py-1 border shadow rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>{" "}
            <h1> Add Post</h1>
          </div>
          {data.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {/* TODO: blog modal */}
        {showModal && <BlogModal setShowModal={setShowModal} />}
      </main>
      <MainFooter />
    </>
  );
}

export default index;
