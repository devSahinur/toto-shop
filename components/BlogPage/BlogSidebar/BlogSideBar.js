import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/outline";
import { useState } from "react";

function BlogSideBar() {
  const router = useRouter();
  const { data: session } = useSession();

  const [openMenu, setOpenMenu] = useState(false);

  const openSidebarMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="col-span-3 relative">
        {/* <!-- account profile --> */}

        <div className="px-4 py-3 shadow flex items-center justify-between gap-4">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
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
          <div
            className="cursor-pointer inline-flex md:hidden"
            onClick={openSidebarMenu}
          >
            <MenuIcon className="h-6" />
          </div>
        </div>

        <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600 hidden md:block">
          <div className="space-y-1 pl-8">
            <div
              onClick={() => router.push("/blog")}
              className={`relative text-base font-medium capitalize cursor-pointer hover:text-primary ${
                router.pathname == "/user/account" && "text-primary"
              } transition block`}
            >
              Recent Post
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
                    d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => router.push("/blog/announcement")}
              className={`relative text-base font-medium capitalize cursor-pointer hover:text-primary ${
                router.pathname == "/user/account" && "text-primary"
              } transition block`}
            >
              Announcement
              <span className="absolute -left-8 top-0 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </span>
            </div>
            <div
              onClick={() => router.push("/blog/mypost")}
              className={`relative text-base font-medium capitalize cursor-pointer hover:text-primary ${
                router.pathname == "/user/account" && "text-primary"
              } transition block`}
            >
              My Posts
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
          </div>
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
        </div>
      </div>
    </>
  );
}

export default BlogSideBar;
