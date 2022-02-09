import { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/layout";
import MyProductCard from "../../components/MyProductCard";
import MyProductTitleBar from "../../components/MyProductTitleBar";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import { useSession } from "next-auth/react";
import NotfoundProduct from "../../components/MyProductPage/NotfoundProduct";

function myProduct() {
  const { data: session } = useSession();
  const [product, setProduct] = useState([]);

  const myData = product?.filter((p) => p?.email === session?.user?.email);
  console.log(myData);

  useEffect(async () => {
    const res = await fetch("http://localhost:3000/api/product");
    const data = await res.json();
    setProduct(data?.data);
  }, []);

  return (
    <>
      <Layout title={"Add Product"}>
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />
          {/* <!-- account content --> */}
          <main className="col-span-9 px-5 md:px-8 py-6 space-y-6">
            {/* content Main */}
            {myData.length >= 1 ? (
              <>
                <MyProductTitleBar />
                {myData.map((product) => (
                  <MyProductCard key={product._id} product={product} />
                ))}
              </>
            ) : (
              <NotfoundProduct />
            )}
          </main>
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </>
  );
}

export default myProduct;
