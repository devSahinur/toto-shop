import { MenuIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

function MobileMenu() {
  const router = useRouter();
  return (
    <div className="absolute top-[200px] min-w-[300px] max-w-[350px] px-2 py-4 animationSidebar drop-shadow-lg z-50 md:hidden">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clipRule="evenodd"
                />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
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
        <div className="pl-8 pt-4">
          <div
            onClick={() => router.push("/user/my-product")}
            className={`relative medium capitalize cursor-pointer font-medium hover:text-primary transition block ${
              router.pathname == "/user/my-product" && "text-primary"
            } `}
          >
            My Product
            <span className="absolute -left-8 top-0 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
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

        {/* <!-- single link end --> */}
        {/* <!-- single link --> */}
        <div className="pl-8 pt-4">
          <div
            onClick={signOut}
            className="relative medium cursor-pointer capitalize text-gray-800 font-medium hover:text-primary transition block"
          >
            logout
            <span className="absolute -left-8 top-0 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* <!-- single link end --> */}
      </div>
    </div>
  );
}

export default MobileMenu;
