import { useRouter } from "next/router";
import MobileMenubar from "./MobileMenubar";
import { HeartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <>
      <nav className="bg-gray-800 hidden lg:block sticky top-0 z-40">
        <div className="container">
          <div className="flex">
            {/* all category  */}
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-white w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <span className="capitalize text-white ml-2">All Categories</span>

              <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                <a
                  href=""
                  className="flex items-center px-6 py-3 hover:bg-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 object-contain"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>
                <a
                  href=""
                  className="flex items-center px-6 py-3 hover:bg-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 object-contain"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>
                <a
                  href=""
                  className="flex items-center px-6 py-3 hover:bg-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 object-contain"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>
                <a
                  href=""
                  className="flex items-center px-6 py-3 hover:bg-white transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 object-contain"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>
              </div>
            </div>

            {/* nav menu */}
            <div className="flex items-center justify-between flex-grow pl-12">
              <div className="flex items-center space-x-6 text-base capitalize">
                <Link href="/">
                  <a className="text-gray-200 hover:text-white transition cursor-pointer">
                    Home
                  </a>
                </Link>
                <Link href="/shop">
                  <a className="text-gray-200 hover:text-white transition cursor-pointer">
                    Shop
                  </a>
                </Link>
                <Link href="/about">
                  <a className="text-gray-200 hover:text-white transition cursor-pointer">
                    About us
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="text-gray-200 hover:text-white transition cursor-pointer">
                    Contact us
                  </a>
                </Link>
                <Link href="/faq">
                  <a className="text-gray-200 hover:text-white transition cursor-pointer">
                    FAQ
                  </a>
                </Link>
              </div>
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0  mt-1">
                  {session?.user?.image && (
                    <Image
                      src={session?.user?.image}
                      height={50}
                      width={50}
                      // src="https://i.ibb.co/dG9tksD/download.jpg"
                      className="rounded-full  border border-gray-200 object-cover"
                    />
                  )}
                </div>
                <div>
                  <p className="text-white">Hello,</p>
                  <h4 className="text-white capitalize font-medium">
                    {session && session?.user.name}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenubar />
    </>
  );
}

export default Navbar;
