import ShopSidebar from "../components/ShopGridPage/ShopSidebar/ShopSidebar";
import ShopContent from "../components/ShopGridPage/ShopContent/ShopContent";
import { useRouter } from "next/router";
import Layout from "../components/layout";

function ShopGrid() {
  return (
    <div>
      <Layout title={"Shop"}>
        <main className="sm:max-w-[70rem] xl:max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-6">
          {/* content Main */}

          <div className="flex xl:space-x-10">
            <ShopSidebar />
            <ShopContent />
          </div>
        </main>
      </Layout>
    </div>
  );
}

export default ShopGrid;
