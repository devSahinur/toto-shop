import Image from "next/image";
import { useRouter } from "next/router";

function SingleOrderHistory({
  id,
  image,
  orderNumber,
  date,
  quantity,
  total,
  status,
  itsCancelPage,
}) {
  const router = useRouter();

  return (
    <div className="border shadow rounded px-2 md:px-4 py-6">
      {/* div top */}
      <div className="flex items-center justify-between pb-4">
        {/* top left */}
        <div className="flex items-center">
          {image?.splice(0, 3).map((url) => (
            <Image src={url} width={100} height={70} objectFit="contain" />
          ))}
        </div>
        {/* top right */}
        <div>
          <button
            className="btn-outline py-[7px] w-[150px]"
            onClick={() => router.push("/order-details")}
          >
            View Order
          </button>
        </div>
      </div>

      {/* content bottom */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="font-medium text-base">Order Number</h3>
          <p className="text-sm">{orderNumber}</p>
        </div>

        {/* another one */}
        <div className="space-y-1">
          <h3 className="font-medium text-base">Purchased</h3>
          <p className="text-sm">{date}</p>
        </div>

        {/* another one */}
        <div className="space-y-1 hidden md:inline-flex">
          <h3 className="font-medium text-base">Quantity</h3>
          <p className="text-sm"> x{quantity}</p>
        </div>
        {/* another one */}
        <div className="space-y-1 hidden md:inline-flex">
          <h3 className="font-medium text-base">Total</h3>
          <p className="text-sm">${total}</p>
        </div>
        {/* status end */}
        <div className="space-y-1">
          <h3 className="font-medium text-base">Status</h3>

          {status || itsCancelPage ? (
            <span className="text-sm text text-green-500 font-medium">
              Delivered
            </span>
          ) : (
            <span className="text-sm text-primary">Cancelled</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleOrderHistory;
