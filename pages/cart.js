import Head from "next/head";
import CartTitleBar from "../components/CartPage/CartTitleBar";
import OrderSummary from "../components/CartPage/OrderSummary";
import { SingleCart } from "../components/CartPage/SingleCart";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/appSlice";
import ProductNotAvailable from "../components/CartPage/ProductNotAvailable";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

function cart() {
  const cartData = useSelector(selectItems);

  console.log(cartData[0]?.product?._id);
  return (
    <>
      <Head>
        <title>Cart({cartData.length}) - ToTo SHOP </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      {cartData.length ? (
        // <Layout title={"Shopping Cart"}>
        <>
          <Header />
          <Navbar />
          <div className="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
            <div className="xl:col-span-9 lg:col-span-8">
              <CartTitleBar />
              <div className="space-y-4">
                {cartData?.map((product) => (
                  <SingleCart
                    key={product?.product?._id}
                    id={product?.product?._id}
                    product={product}
                  />
                ))}
              </div>
            </div>
            <OrderSummary />
          </div>
          <Footer />
          <Copyright />
        </>
      ) : (
        <ProductNotAvailable />
      )}
    </>
  );
}

export default cart;
