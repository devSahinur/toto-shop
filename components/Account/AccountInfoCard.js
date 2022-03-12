import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { PencilIcon } from "@heroicons/react/outline";

function AccountInfoCard() {
  const { data: session } = useSession();
  return (
    <div>
      {/* cover card */}
      <div className="w-full relative">
        <img
          src="https://i.ibb.co/YDb8xrb/white-texture-cover-photo.webp"
          className="w-full h-[150px]"
        />
        {/* TODO: profile imagehandler */}
        <div className=" cursor-pointer absolute -bottom-16 z-50 left-1/2 transform -translate-x-1/2">
          <Image
            src={session?.user.image}
            width={130}
            height={130}
            className="rounded-full object-contain  hover:opacity-90 hover:shadow-md"
          />
        </div>
        {/* edite profile button */}
        <div className="absolute right-4 bottom-5">
          <button className="px-3 md:px-4 md:py-2 bg-header500 ring-2 focus-within:ring-header400 rounded-md text-black py-2">
            <p className="hidden md:block">Edite Profile</p>
            <PencilIcon className="h-5 text-white font-bold md:hidden" />
          </button>
        </div>
      </div>

      {/* bottom content */}
      <div className="text-center pt-20">
        <p className="text-xs md:text-sm text-gray-500 pb-3">
          Dhaka, Bangladesh
        </p>
        <h1 className="text-3xl font-semibold font-poppins">
          {session?.user.name}
        </h1>
      </div>
    </div>
  );
}

export default AccountInfoCard;
