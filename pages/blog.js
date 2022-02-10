import { useRouter } from "next/router";
import BlogSideBar from "../components/BlogPage/BlogSidebar/BlogSideBar";
import BlogContent from "../components/BlogPage/BlogContent/BlogContent";
import Layout from "../components/layout";

const blog = () => {
  return (
    <div>
      <Layout title={'blog'}>
        <main className="sm:max-w-[50rem] xl:max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-6">
          {/* content Main */}

          <div className="md:flex xl:space-x-10">
            <BlogSideBar />
            <BlogContent />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default blog;
