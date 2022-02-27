import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainFooter from "../../components/commonComponents/MainFooter";
import MainHeader from "../../components/commonComponents/MainHeader";
import UserSidebar from "../../components/commonComponents/UserSidebar";
import SingleWishList from "../../components/WishListPage/SingleWishList";
import WishListProductNotAvailable from "../../components/WishListPage/WishListProductNotAvailable";
import withAuth from "../../lib/withAuth";
import {
  addSingleWish,
  selectWish,
  selectWishAll,
} from "../../slices/wishSlice";

import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

// FIXME: for show the loader

import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";

// TODO loading
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function wishlist() {
  const wishlistAll = useSelector(selectWish);

  const [allProduct, setProduct] = useState([]);

  const dispatch = useDispatch();

  const wishListAlls = useSelector(selectWishAll);

  // TODO: for loading

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FD3D57");

  const addWishL = (e) => {
    if (e) {
      dispatch(addSingleWish(e));
    }
  };

  useEffect(async () => {
    setLoading(true);
    const res = await fetch(`${process.env.host_url}/api/product`);
    const data = await res.json();
    setProduct(data?.data);

    setLoading(false);
  }, []);

  useEffect(() => {
    wishlistAll?.map((item) => {
      console.log("this is the wishlist item", item);
      const filterWishItem = allProduct.find(
        (appProduct) => appProduct._id === item
      );

      addWishL(filterWishItem);
    });
  }, [allProduct]);

  return (
    <>
      <Head>
        <title>My WistList({wishlistAll.length}) - ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>

      {wishListAlls.length ? (
        <>
          <MainHeader BreadcrumbTitle="MY wish list" />
          <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            <UserSidebar />
            <div className="col-span-9 mt-6 lg:mt-0 space-y-4">
              {wishListAlls?.map((product) => (
                <SingleWishList product={product} key={product._id} />
              ))}
            </div>
          </div>
          <MainFooter />
        </>
      ) : (
        <>
          {loading ? (
            <>
              <MainHeader BreadcrumbTitle="no" />
              <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
                <UserSidebar />
                <div className="col-span-9 mt-6 lg:mt-12 flex items-center justify-center">
                  <HashLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={300}
                  />
                </div>
              </div>
              <div className="hidden md:block">
                <Footer />
              </div>
              <Copyright />
            </>
          ) : (
            <WishListProductNotAvailable />
          )}
        </>
      )}
    </>
  );
}

export default withAuth(wishlist);
