import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import BlogSideBar from "../components/BlogPage/BlogSidebar/BlogSideBar";
import BlogContent from "../components/BlogPage/BlogContent/BlogContent";

const blog = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <Navbar />
      {/* main-Content */}
      <div className="py-4 container flex gap-3 items-center">
        <div
          onClick={() => router.push("/")}
          className="text-primary cursor-pointer text-base"
        >
          <i className="fas fa-home"></i>
        </div>
        <span className="text-sm text-gray-400">
          <i className="fas fa-chevron-right"></i>
        </span>
        Blog
      </div>

      <main className="sm:max-w-[50rem] xl:max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-6">
        {/* content Main */}

        <div className="md:flex xl:space-x-10">
          <BlogSideBar />
          <BlogContent />
        </div>
      </main>
      <Footer />
      <Copyright />
    </div>
  );
};

export default blog;
