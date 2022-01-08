function OrderDetailsBottom() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-x-5">
      {/* bottom left */}
      <div className="px-4 py-6 shadow-md rounded space-y-3">
        <h3 className="font-medium text-lg text-gray-800">Shipping Address</h3>
        <div className="space-y-1 text-gray-500">
          <h4 className="text-gray-900 font-medium">Faysal Mridha</h4>
          <p>3891 Ranchview Dr.</p>
          <p>IndurKani,Pirojpur</p>
          <p>+8801646177169</p>
        </div>
      </div>
      {/* bottom middle */}
      <div className="px-4 py-6 shadow-md rounded space-y-3">
        <h3 className="font-medium text-lg text-gray-800">Shipping Address</h3>
        <div className="space-y-1 text-gray-500">
          <h4 className="text-gray-900 font-medium">Faysal Mridha</h4>
          <p>3891 Ranchview Dr.</p>
          <p>IndurKani,Pirojpur</p>
          <p>+8801646177169</p>
        </div>
      </div>
      {/* bottom right */}
      <div className="px-4 py-6 shadow-md rounded space-y-3">
        <h3 className="font-medium text-lg text-gray-800">Total Summary</h3>
        <div className="">
          {/* total top */}
          <div className="pb-4 space-y-2 text-gray-600">
            <p className="flex items-center justify-between">
              Subtotal <span className="font-bold">$50</span>
            </p>
            <p className="flex items-center justify-between">
              Shipping Fee <span className="font-bold">$30</span>
            </p>
          </div>
          {/* total bottomg */}
          <div className="pt-4 border-t space-y-2 text-gray-600">
            <p className="flex items-center justify-between font-semibold">
              Total <span className="font-bold">$80</span>
            </p>
            <p>Paid by Cash on Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsBottom;
