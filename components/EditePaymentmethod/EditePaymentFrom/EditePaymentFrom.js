function EditePaymentFrom() {
  return (
    <div className="border shadow py-8 px-6 rounded">
      <h1 className="text-xl font-medium pb-4">Edit Payment Method</h1>
      <form className="space-y-3">
        <div className="space-y-3">
          <h3 className="text-lg text-gray-600">
            Card Number <span className="text-primary">*</span>
          </h3>
          <input className="input-box" type="text" placeholder="Card Number" />
        </div>
        {/* another input */}
        <div className="space-y-3">
          <h3>
            Name On Cart <span className="text-primary">*</span>
          </h3>
          <input
            className="input-box"
            type="text"
            placeholder="Enter name on card"
          />
        </div>
        {/* another */}
        <div className="grid grid-cols-2 gap-x-3">
          <div className="space-y-3">
            <h3>
              Expiration Date <span className="text-primary">*</span>
            </h3>
            <input className="input-box" type="text" placeholder="MM/YY" />
          </div>
          {/* another one */}
          <div className="space-y-3">
            <h3>
              CVV <span className="text-primary">*</span>
            </h3>
            <input className="input-box" type="text" placeholder="CVV" />
          </div>
        </div>

        {/* input box */}
        <div className="space-x-2 flex items-center text-base">
          <input className="border-2 border-primary" type="checkbox" />
          <span>Save as defalut</span>
        </div>

        {/* button */}
        <div>
          <button className="btn py-2">Sava Changes</button>
        </div>
      </form>
    </div>
  );
}

export default EditePaymentFrom;
