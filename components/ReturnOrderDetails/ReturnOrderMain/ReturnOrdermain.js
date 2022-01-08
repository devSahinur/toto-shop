import OrderSingleRetunCard from "../../OrderDetails/OrderDetailsTop/OrderSingleRetunCard";

function ReturnOrdermain() {
  return (
    <div className="border shadow-md py-8 px-6 rounded">
      <h1 className="text-xl font-medium pb-4">Return Request</h1>
      {/* details top */}
      <div className="flex items-center space-x-8">
        {/* details single top */}
        <div className="space-y-2">
          <h3 className="font-medium text-base">Sold By</h3>
          <span className="text-sm text-primary">RAFCART</span>
        </div>
        {/* order NUmber */}
        <div className="space-y-2">
          <h3 className="font-medium text-base">Order Number</h3>
          <span className="text-sm text-gray-600">789ER4S324</span>
        </div>
      </div>
      {/* single card */}
      <OrderSingleRetunCard
        id={1}
        title="Sound Intone I65 Earphone"
        image="https://i.ibb.co/D5kM6Hb/headphone-3.png"
        price={50}
        quantity={1}
        itsReturnOrder={true}
        available={false}
      />
      {/* payment method */}
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-normal pb-2">Payment Method</h4>
          <div className="flex items-center space-x-3 text-gray-600">
            <input type="radio" />
            {/* flex col */}
            <p>Refund By Credit Card</p>
          </div>
          <p className="pl-6 text-gray-600">
            Money will be return your Credit Card That you used for purchased
          </p>
        </div>
        {/* Select shipment optioni */}
        <div>
          <h4 className="font-medium text-normal pb-2">
            Select Shipment Option
          </h4>
          <div className="flex items-center space-x-3 text-gray-600">
            <input type="radio" />
            <p>Courier Pick UP</p>
          </div>
          {/* another one */}
          <div className="flex items-center space-x-3 text-gray-600">
            <input type="radio" />
            <p>Drop off</p>
          </div>
        </div>
        {/* input box or textarea */}
        <div className="space-y-3">
          <h4 className="text-base">Additional Information (optional)</h4>
          <textarea
            className="w-full h-[100px] resize-none input-box"
            cols="30"
            rows="10"
            placeholder="Example: worng size"
          ></textarea>
        </div>

        {/* check box */}
        <div className="flex items-center space-x-3 py-1">
          <input type="checkbox" />
          <p>
            I have Read and accepted the{" "}
            <span className="text-primary">Return Policy</span> of RAFCART
          </p>
        </div>
        {/* button */}

        <div>
          <button className="btn uppercase">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ReturnOrdermain;
