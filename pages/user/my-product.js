import Layout from "../../components/layout";
import MyProductCard from "../../components/MyProductCard";
import MyProductTitleBar from "../../components/MyProductTitleBar";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";

function myProduct() {
  return (
    <>
      <Layout title={"Add Product"}>
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />
          {/* <!-- account content --> */}
          <main className="col-span-9 px-5 md:px-8 py-6 space-y-6">
            {/* content Main */}
            <MyProductTitleBar />
            <MyProductCard />
            <MyProductCard />
            <MyProductCard />
          </main>
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </>
  );
}

export default myProduct;
