import Image from "next/image";
import { useRouter } from "next/router";
import Copyright from "../Copyright";
import Header from "../Header";
import Navbar from "../Navbar";

function ProductNotAvailable() {
    const router = useRouter();
  return (
    <>
      <main className="sm:max-w-[50rem] xl:max-w-[75rem] mx-auto px-5 md:px-8 py-6 space-y-6">
        {/* bottom containt */}
        <div className="max-w-[55rem] mx-auto px-4 py-6 pt-6 flex items-center justify-center flex-col space-y-5">
          <div className="w-full pl-0 md:pl-20 xl:pl-20 lg:pl-20">
            <Image
              src="https://i.ibb.co/ncPcTGf/empty-cart.gif"
              width={650}
              height={350}
            />
          </div>

          <div className="py-4 text-center font-medium">
            <div
              onClick={() => router.push("/")}
              className="btn"
            >
              Go back and continue shopping
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductNotAvailable;
