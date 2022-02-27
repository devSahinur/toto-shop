import { useSession } from "next-auth/react";
import withAuth from "../../lib/withAuth";
import MainHeader from "../../components/commonComponents/MainHeader";
import MainFooter from "../../components/commonComponents/MainFooter";
import UserSidebar from "../../components/commonComponents/UserSidebar";
import { getSession } from "next-auth/react";
import Currency from "react-currency-formatter";

// Database
import dbConnect from "./../../lib/dbConnect";
import Order from "./../../models/order";

function OrderHistory({ orders }) {
  const { data: session } = useSession();

  return (
    <>
      <MainHeader BreadcrumbTitle="My Order History" />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <UserSidebar />
        <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
          <main className="max-w-screen-lg mx-auto p-10">
            <h1 className="text-3xl border-b mb-2 pb-1 border-primary">
              Your Orders
            </h1>
            {session ? (
              <h2>{orders.length} Orders</h2>
            ) : (
              <h2>Please sign in to see your orders</h2>
            )}
            <div className="mt-5 space-y-4">
              {orders?.map(
                ({
                  id,
                  title,
                  amount,
                  description,
                  category,
                  images,
                  amountShipping,
                  items,
                }) => (
                  <div key={id} className="relative border rounded-md">
                    <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                      <div>
                        <p className="font-bold text-xs">ORDER PLACED</p>
                        {/* <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p> */}
                      </div>

                      <div>
                        <p className="text-xs font-bold">TOTAL</p>
                        <p>
                          <Currency quantity={amount} currency="USD" /> - Next
                          Day Delivery{" "}
                          <Currency quantity={amountShipping} currency="USD" />
                        </p>
                      </div>

                      <p className="text-xs whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
                        {items.data.length} items
                      </p>

                      <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
                        ORDER # {id}
                      </p>
                    </div>

                    <div className="p-5 sm:p-10 ">
                      <div className="flex space-x-6 overflow-x-auto">
                        {images.map((image) => (
                          <img
                            src={image}
                            alt=""
                            className="h-20 object-contain sm:h-32"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </main>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default withAuth(OrderHistory);

export async function getServerSideProps(ctx) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(ctx);

  const email = session.user.email;

  await dbConnect();

  const OrderData = await Order.find({ email }).sort({ _id: -1 }).lean();
  const stripeOrders = JSON.parse(JSON.stringify(OrderData));

  const orderGet = await Promise.all(
    stripeOrders.map(async (order) => ({
      id: order.id,
      amount: order.amount,
      amountShipping: order.amount_shipping,
      images: order.images,
      items: await stripe.checkout.sessions.listLineItems(order.id, {
        limit: 100,
      }),
    }))
  );

  const orders = JSON.parse(JSON.stringify(orderGet));

  return {
    props: {
      orders,
    },
  };
}
