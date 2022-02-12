import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import SingleReviews from "../../components/MyReviews/SingleRevies/SingleReviews";
import Layout from "../../components/layout";
import withAuth from "../../lib/withAuth";

// https://i.ibb.co/fDCywKw/iphone-12.png
// https://i.ibb.co/dMJPPb8/headphone-1-1.pnghttps://i.ibb.co/GcHqRGD/x-box.png
// https://i.ibb.co/dMJPPb8/headphone-1-1.png
// https://i.ibb.co/sWxtXxc/bag-2.png

const orderHistory = [
  {
    id: 1,
    image: "https://i.ibb.co/GcHqRGD/x-box.png",
    titile: "Xbox One Wireless Controll",
    orderNumber: "23E34R13",
    date: "01 March 2021",
    ratting: [],
    quantity: 3,
    total: 120,
    status: false,
  },
  {
    id: 2,
    image: "https://i.ibb.co/sWxtXxc/bag-2.png",
    titile: "Herschel Leather Duffle Bag",
    orderNumber: "23E34R13",
    date: "01 March 2021",
    ratting: [1, 2, 3, 4, 5],
    quantity: 3,
    total: 120,
    status: true,
  },
  {
    id: 3,
    image: "https://i.ibb.co/dMJPPb8/headphone-1-1.png",
    titile: "Sound Intone I65 Earphone",
    ratting: [1, 2, 3, 4, 5],
    orderNumber: "23E34R13",
    date: "01 March 2021",
    quantity: 3,
    total: 120,
    status: false,
  },
];

function OrderHistory() {
  return (
    <>
      <Layout title={"MY Order History"}>
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />

          {/* <!-- account content --> */}
          <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
            {/* <!-- single card --> */}
            {orderHistory?.map(
              ({
                id,
                image,
                orderNumber,
                date,
                ratting,
                total,
                status,
                titile,
                quantity,
              }) => (
                <SingleReviews
                  key={id}
                  id={id}
                  image={image}
                  orderNumber={orderNumber}
                  date={date}
                  quantity={quantity}
                  total={total}
                  titile={titile}
                  ratting={ratting}
                  status={status}
                />
              )
            )}
            {/* <!-- single card end --> */}
          </div>
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </>
  );
}

export default withAuth(OrderHistory);
