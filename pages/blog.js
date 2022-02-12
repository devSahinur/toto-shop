import { useRouter } from "next/router";
import BlogSideBar from "../components/BlogPage/BlogSidebar/BlogSideBar";
import BlogContent from "../components/BlogPage/BlogContent/BlogContent";
import Layout from "../components/layout";

const blog = () => {
  return (
    <div>
      <Layout title={"blog"}>
        <main className="max-w-5xl mx-auto px-5 md:px-8 py-6 space-y-6">
          {/* content Main */}

          <div className="md:flex md:space-x-5 xl:space-x-10">
            <BlogSideBar />
            <BlogContent />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default blog;
