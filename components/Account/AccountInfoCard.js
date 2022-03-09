import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function AccountInfoCard() {
  const { data: session } = useSession();
  return (
    <div>
      {/* cover card */}
      <div className="w-full relative">
        <img
          src="https://i.ibb.co/YDb8xrb/white-texture-cover-photo.webp"
          className="object-contain w-full"
        />
        {/* TODO: profile imagehandler */}
        <div className="absolute -bottom-16 z-50 left-1/2 transform -translate-x-1/2">
          <Image
            src={session?.user.image}
            width={150}
            height={150}
            className="rounded-full object-contain"
          />
        </div>
        {/* edite profile button */}
        <div className="absolute right-4 bottom-5">
          <button className="px-3 md:px-5 md:py-3 bg-header500 ring-2 focus-within:ring-header400 rounded-md text-black py-2">
            Edite Profile
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
