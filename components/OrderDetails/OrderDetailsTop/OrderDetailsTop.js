import OrderSingleRetunCard from "./OrderSingleRetunCard";
import OrderStepProgress from "./OrderStepProgress";

const orderReturn = [
  {
    id: 1,
    title: "Sound Intone 165 EarPhone",
    image: "https://i.ibb.co/D5kM6Hb/headphone-3.png",
    price: "50",
    quantity: 1,
    returnOrder: true,
    date: "24 Sep 2021",
    available: false,
  },
];

function OrderDetailsTop() {
  return (
    <div className="border shadow-md py-8 px-6 rounded">
      <h1 className="text-xl font-medium pb-4">Order Details</h1>
      {/* details top */}
      <div className="flex items-center justify-between space-x-4 flex-wrap">
        <div className="space-y-4">
          <h3 className="font-medium text-base">Sold By</h3>
          <span className="text-sm uppercase text-primary">Rafcart</span>
        </div>
        {/* another one */}
        <div className="space-y-4">
          <h3 className="font-medium text-base">Order Number</h3>
          <span className="text-sm text-gray-600">789ER4S324</span>
        </div>
        {/* another one */}
        <div className="space-y-4 hidden md:block">
          <h3 className="font-medium text-base">Shipped Date</h3>
          <span className="text-sm text-gray-600">01 March 2021</span>
        </div>
        <button className="btn-outline py-[9px]">Write A Review</button>
      </div>
      {/* step progress bar */}
      <div className="py-6">
        <OrderStepProgress />
      </div>

      {/* thank oyour cart */}
      <div className="max-w-[750px] mx-auto px-5 py-4 border shadow-md rounded flex items-center justify-between text-sm space-x-2 md:text-base">
        <span>23 Jul 2021.18.56</span>
        <p>
          Your package has been delivered. Thank you for shopping at RAFCART!
        </p>
      </div>
      {/* order Single card */}
      <div className="py-6">
        {orderReturn?.map(
          ({
            id,
            title,
            image,
            available,
            price,
            quantity,
            returnOrder,
            date,
          }) => (
            <OrderSingleRetunCard
              key={id}
              id={id}
              title={title}
              image={image}
              price={price}
              quantity={quantity}
              returnOrder={returnOrder}
              date={date}
              available={available}
            />
          )
        )}
      </div>
    </div>
  );
}

export default OrderDetailsTop;
