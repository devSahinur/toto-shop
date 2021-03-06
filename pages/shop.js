import ShopSidebar from "../components/ShopGridPage/ShopSidebar/ShopSidebar";
import ShopContent from "../components/ShopGridPage/ShopContent/ShopContent";
import querySearch from "../lib/querySearch";
import spliceData from "../lib/spliceData";
import Head from "next/head";
import MainHeader from "../components/commonComponents/MainHeader";
import MainFooter from "../components/commonComponents/MainFooter";

const itemsPerPage = 20; // Number of Card per page (for pagination)

function ShopGrid({ keyword, totalItems, sortby, currentItems, category }) {
  return (
    <>
      <Head>
        <title>
          {keyword} - Buy {keyword} at Best Price in Bangladesh |
          www.totoshop.tech
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content={`${keyword} Bangladesh - Shop for best hello online at www.totoshop.tech`}
        ></meta>
      </Head>
      <MainHeader BreadcrumbTitle="Shop" />
      <main className="sm:max-w-[70rem] xl:max-w-7xl mx-auto px-5 md:px-8 py-6 space-y-6">
        <div className="flex xl:space-x-10">
          <ShopSidebar />
          <ShopContent currentItems={currentItems} />
        </div>
      </main>
      <MainFooter />
    </>
  );
}

export default ShopGrid;

export async function getServerSideProps(context) {
  const keyword = context.query.keyword ? context.query.keyword : "";
  const category = context.query.category ? context.query.category : "";
  const minprice = context.query.minprice ? context.query.minprice : "";
  const maxprice = context.query.maxprice ? context.query.maxprice : "";
  const sortby = context.query.sort ? context.query.sort : "Latest";
  const data = await querySearch(keyword, category, minprice, maxprice, sortby);

  const dataConvert = JSON.parse(JSON.stringify(data));
  // Paginate session
  const page = context.query.page ? context.query.page : "1";
  const currentItems = spliceData(dataConvert, page, itemsPerPage);
  const totalItems = dataConvert.length;

  return {
    props: {
      keyword,
      category,
      currentItems,
      sortby,
      totalItems,
    },
  };
}
