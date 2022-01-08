import { useRouter } from "next/router";

function SingleReturnOrder({ product }) {
  const router = useRouter();
  return (
    <>
      {/* <!-- single return order --> */}
      <div className="flex md:justify-between gap-4 md:gap-6 p-8 border border-gray-200 rounded flex-wrap md:flex-nowrap shadow hover:shadow-md">
        {/* <!-- cart image --> */}
        <div className="flex space-x-6">
          {/* image */}
          <div className="w-[60px]">
            <img src={product.image[0].img} className="w-full" />
          </div>

          {/* title and price */}
          <div className="flex-1 w-[170px] space-y-2 text-gray-600">
            <h2 className="font-medium">{product.title}</h2>
            <p className="text-sm md:text-md">${product.price}</p>
          </div>
        </div>
        {/* <!-- cart image end --> */}

        {/* <!-- cart content --> */}
        <div className="space-y-2">
          <h3 className="font-medium">Order Number</h3>
          <p className="text-gray-500 text-sm md:text-base">
            {product.orderNumbers}
          </p>
        </div>
        {/* <!-- cart content end --> */}
        <div className="space-y-2">
          <h3 className="font-medium">Return status</h3>
          {product.returnStatus ? (
            <span className="text-sm md:text-md text-green-500">
              Successful
            </span>
          ) : (
            <span className="text-sm md:text-md text-yellow-300">
              Processing
            </span>
          )}
        </div>
        {/* view order */}
        <div>
          <button
            onClick={() => router.push("/return-order-details")}
            className="btn-outline py-2"
          >
            View Order
          </button>
        </div>
      </div>
      {/* <!-- single retun order --> */}
    </>
  );
}

export default SingleReturnOrder;
