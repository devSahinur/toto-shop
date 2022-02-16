import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";
import withAuth from "../../lib/withAuth";
import MainHeader from "../../components/commonComponents/MainHeader";
import MainFooter from "../../components/commonComponents/MainFooter";
import UserSidebar from "../../components/commonComponents/UserSidebar";

const orderHistory = [
  {
    id: 1,
    image: [
      "https://i.ibb.co/kDYYgSr/tv.png",
      "https://i.ibb.co/kDYYgSr/tv.png",
    ],
    orderNumber: "23E34R13",
    date: "01 March 2021",
    quantity: 3,
    total: 120,
    status: false,
  },
  {
    id: 2,
    image: [
      "https://i.ibb.co/D5kM6Hb/headphone-3.png",
      "https://i.ibb.co/D5kM6Hb/headphone-3.png",
    ],
    orderNumber: "23E34R13",
    date: "01 March 2021",
    quantity: 3,
    total: 120,
    status: true,
  },
  {
    id: 3,
    image: [
      "https://i.ibb.co/k1X4DXy/laptop-1.png",
      "https://i.ibb.co/k1X4DXy/laptop-1.png",
      "https://i.ibb.co/k1X4DXy/laptop-1.png",
    ],
    orderNumber: "23E34R13",
    date: "01 March 2021",
    quantity: 3,
    total: 120,
    status: false,
  },
];

function OrderHistory() {
  const [order, setOrders] = useState([]);
  const { data: session } = useSession();

  console.log(order);

  useEffect(async () => {
    const res = await fetch("/api/order");
    const data = await res.json();
    setOrders(data.OrderHistory);
  }, []);
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
              <h2>{order.length} Orders</h2>
            ) : (
              <h2>Please sign in to see your orders</h2>
            )}
            <div className="mt-5 space-y-4">
              {/* {order?.map(
                        ({id, title, amount, description, category, images,timestamp,amountShipping, items}
                        )=> (
                        <Order 
                        id={id}
                        key={id}
                        title={title}
                        amount={amount}
                        description={description}
                        category={category}
                        images={images}
                        timestamp={timestamp}
                        amountShipping={amountShipping}
                        items={items}
                        />
                    ))} */}
            </div>
          </main>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default withAuth(OrderHistory);
