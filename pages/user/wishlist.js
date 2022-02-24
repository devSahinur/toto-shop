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

function wishlist() {
  const wishlistAll = useSelector(selectWish);

  const [allProduct, setProduct] = useState([]);

  const dispatch = useDispatch();

  const wishListAlls = useSelector(selectWishAll);

  const addWishL = (e) => {
    console.log(e);
    if (e) {
      dispatch(addSingleWish(e));
    }
  };

  // console.log(wishlistAll);
  // console.log(allProduct);

  useEffect(async () => {
    const res = await fetch(`${process.env.host_url}/api/product`);
    const data = await res.json();
    setProduct(data?.data);
  }, []);

  useEffect(() => {
    const mapWishList = wishlistAll?.map((item) => {
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
        <WishListProductNotAvailable />
      )}
    </>
  );
}

export default withAuth(wishlist);
