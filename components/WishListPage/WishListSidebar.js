import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function WishListSidebar() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      {/* <!-- sidebar --> */}
      <div className="col-span-3">
        {/* <!-- account profile --> */}
        <div className="px-4 py-3 shadow flex items-center gap-4">
          <div className="flex-shrink-0">
            {/* {session && (
              // <span
              //   style={{ backgroundImage: `url('${session?.user.image}')` }}
              //   // className={styles.avatar}
              // />
            )} */}
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                height={50}
                width={50}
                // src="https://i.ibb.co/dG9tksD/download.jpg"
                className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"
              />
            )}
          </div>
          <div>
            <p className="text-gray-600">Hello,</p>
            <h4 className="text-gray-800 capitalize font-medium">
              {session && session?.user.name}
            </h4>
          </div>
        </div>
        {/* <!-- account profile end --> */}

        {/* <!-- profile links --> */}
        <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
          {/* <!-- single link --> */}
          <div className="space-y-1 pl-8">
            <div
              onClick={() => router.push("/user/account")}
              className={`relative text-base font-medium capitalize cursor-pointer hover:text-primary ${
                router.pathname == "/user/account" && "text-primary"
              } transition block`}
            >
              Manage account
              <span className="absolute -left-8 top-0 text-base">
                <i className="far fa-address-card"></i>
              </span>
            </div>
            <div
              onClick={() => router.push("/user/profile-info")}
              className={`hover:text-primary transition cursor-pointer ${
                router.pathname == "/user/profile-info" && "text-primary"
              } capitalize block`}
            >
              Profile information
            </div>
            <div
              onClick={() => router.push("/user/manage-address")}
              className={`hover:text-primary cursor-pointer transition ${
                router.pathname == "/user/manage-address" && "text-primary"
              } capitalize block`}
            >
              Manage address
            </div>
            <div
              onClick={() => router.push("/user/change-password")}
              className={`hover:text-primary transition cursor-pointer ${
                router.pathname == "/user/change-password" && "text-primary"
              } capitalize block`}
            >
              change password
            </div>
          </div>
          {/* <!-- single link end --> */}
          {/* <!-- single link --> */}
          <div className="space-y-1 pl-8 pt-4">
            <div
              onClick={() => router.push("/user/my-order-history")}
              className={`relative text-base font-medium capitalize cursor-pointer hover:text-primary ${
                router.pathname == "/user/my-order-history" && "text-primary"
              } transition block`}
            >
              My order history
              <span className="absolute -left-8 top-0 text-base">
                <i className="fas fa-gift"></i>
              </span>
            </div>
            <div
              onClick={() => router.push("/user/my-return-order")}
              className={`hover:text-primary cursor-pointer transition block ${
                router.pathname == "/user/my-return-order" && "text-primary"
              } capitalize`}
            >
              my returns
            </div>
            {/* <div
              onClick={() => router.push("/my-cancellations")}
              className={`hover:text-primary cursor-pointer transition block ${router.pathname =="/my-cancellations" && 'text-primary'} capitalize`}
            >
              my cancellations
            </div> */}
            <div
              onClick={() => router.push("/user/my-reviews")}
              className={`hover:text-primary cursor-pointer transition block ${
                router.pathname == "/user/my-reviews" && "text-primary"
              } capitalize`}
            >
              my reviews
            </div>
          </div>
          {/* <!-- single link end --> */}
          {/* <!-- single link --> */}
          <div className="space-y-1 pl-8 pt-4">
            <div
              onClick={() => router.push("/user/payment-methods")}
              className={`relative text-base font-medium capitalize cursor-pointer hover:text-primary ${
                router.pathname == "/user/payment-methods" && "text-primary"
              } transition block`}
            >
              Payment methods
              <span className="absolute -left-8 top-0 text-base">
                <i className="far fa-credit-card"></i>
              </span>
            </div>
            <div
              onClick={() => router.push("/user/vvv")}
              className="hover:text-primary cursor-pointer transition block capitalize"
            >
              Voucher
            </div>
          </div>
          {/* <!-- single link end --> */}
          {/* <!-- single link --> */}
          <div className="pl-8 pt-4">
            <div
              onClick={() => router.push("/user/sellingOrders")}
              className={`relative medium capitalize cursor-pointer font-medium hover:text-primary transition block ${
                router.pathname == "/user/sellingOrders" && "text-primary"
              } `}
            >
              Selling orders
              <span className="absolute -left-8 top-0 text-base">
              <i className="fas fa-cart-plus"></i>
              </span>
            </div>
          </div>
          <div className="pl-8 pt-4">
            <div
              onClick={() => router.push("/user/wishlist")}
              className={`relative medium capitalize cursor-pointer font-medium hover:text-primary transition block ${
                router.pathname == "/user/wishlist" && "text-primary"
              } `}
            >
              my wishlist
              <span className="absolute -left-8 top-0 text-base">
              <i className="fas fa-heart"></i>
              </span>
            </div>
          </div>
          {/* <!-- single link end --> */}
          {/* <!-- single link --> */}
          <div className="pl-8 pt-4">
            <div
              onClick={signOut}
              className="relative medium cursor-pointer capitalize text-gray-800 font-medium hover:text-primary transition block"
            >
              logout
              <span className="absolute -left-8 top-0 text-base">
                <i className="fas fa-sign-out-alt"></i>
              </span>
            </div>
          </div>
          {/* <!-- single link end --> */}
        </div>
        {/* <!-- profile links end --> */}
      </div>
      {/* <!-- sidebar end --> */}
    </>
  );
}

export default WishListSidebar;
