import Head from "next/head";
import BlogSideBar from "./../../components/BlogPage/BlogSidebar/BlogSideBar";
import MainFooter from "./../../components/commonComponents/MainFooter";
import MainHeader from "./../../components/commonComponents/MainHeader";
import BlogPost from "../../components/BlogPage/BlogPost/BlogPost";

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
          {data.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </div>
      </main>
      <MainFooter />
    </>
  );
}

export default index;
