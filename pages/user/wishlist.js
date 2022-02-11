import { useSelector } from "react-redux";
import Layout from "../../components/layout";
import SingleWishList from "../../components/WishListPage/SingleWishList";
import WishListProductNotAvailable from "../../components/WishListPage/WishListProductNotAvailable";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import withAuth from "../../lib/withAuth";
import { selectWish } from "../../slices/wishSlice";

function wishlist() {
  const wishlistAll = useSelector(selectWish);

  return (
    <>
      {wishlistAll.length ? (
        <Layout title={"MY wish list"}>
          <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            <WishListSidebar />
            <div className="col-span-9 mt-6 lg:mt-0 space-y-4">
              {wishlistAll?.map((product) => (
                <SingleWishList product={product} key={product._id} />
              ))}
            </div>
          </div>
        </Layout>
      ) : (
        <WishListProductNotAvailable />
      )}
    </>
  );
}

export default withAuth(wishlist);
