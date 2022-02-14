import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/layout";
import withAuth from "../../lib/withAuth";

function OrderComplate() {
  const router = useRouter();
  return (
    <>
      {/* <Layout title={"Order Complete"}> */}
        <main className="max-w-[75rem] mx-auto px-4 py-6">
          {/* main content  top*/}
          <div className="px-1 md:px-8 pt-4 pb-10 flex justify-center items-center">
            <div className="flex items-center justify-center flex-col space-y-5 max-w-[650px]">
              {/* image */}
              <div>
                <Image
                  src="https://i.ibb.co/zGc5cHS/complete.png"
                  width={80}
                  height={100}
                  className="object-contain w-full"
                />
              </div>
              {/*  order title*/}
              <div className="text-center space-y-6">
                <h1 className="text-3xl font-semibold">
                  YOUR ORDER IS COMPLETED!
                </h1>
                <p className="text-gray-700">
                  Thank you for your order! Your order is being processed and
                  will be completed within 3-6 hours. You will receive an email
                  confirmation when your order is completed.
                </p>
              </div>

              {/* button */}
              <button className="btn uppercase">Continue Shopping</button>
            </div>
          </div>
        </main>
      {/* </Layout> */}
    </>
  );
}

export default withAuth(OrderComplate);
