import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
// import Layout from "../../components/layout";
import MyProductCard from "../../components/MyProductCard";
import MyProductTitleBar from "../../components/MyProductTitleBar";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import { useSession } from "next-auth/react";
import NotfoundProduct from "../../components/MyProductPage/NotfoundProduct";
import { useRouter } from "next/router";
import withAuth from "../../lib/withAuth";

function myProduct() {
  const router = useRouter();
  const { data: session } = useSession();
  const [product, setProduct] = useState([]);

  const myData = product?.filter((p) => p?.email === session?.user?.email);

  useEffect(async () => {
    const res = await fetch("http://localhost:3000/api/product");
    const data = await res.json();
    setProduct(data?.data);
  }, []);

  const confirmDelete = async (id) => {
    const res = await fetch(`/api/productitem?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      // Router.reload() // Reload page for fetch GET item again
      // router.push("/");
      const findIndex = product.findIndex((item) => item._id === id);
      const newProducts = [...product];
      if (findIndex >= 0) {
        newProducts.splice(findIndex, 1);
      }
      setProduct(newProducts);
    }
  };

  return (
    <>
    <Head>
        <title>({myData.length}) Product | ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      {/* <Layout title={"Add Product"}> */}
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />
          <main className="col-span-9 px-5 md:px-8 py-6 space-y-6">
            {/* content Main */}
            {myData.length >= 1 ? (
              <>
                <MyProductTitleBar />
                {myData.map((product) => (
                  <MyProductCard
                    key={product._id}
                    confirmDelete={confirmDelete}
                    product={product}
                  />
                ))}
              </>
            ) : (
              <NotfoundProduct />
            )}
          </main>
        </div>
      {/* </Layout> */}
    </>
  );
}

export default withAuth(myProduct);
