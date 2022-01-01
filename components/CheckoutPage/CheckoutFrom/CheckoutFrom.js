function CheckoutFrom() {
  return (
    <div className="md:col-span-2">
      <h1 className="px-4 py-2 text-gray-800 bg-gray-200 mb-6 rounded-md font-medium">
        Billing Details
      </h1>
      <form className="space-y-6">
        <div className="md:grid md:grid-cols-2 md:gap-x-6 space-y-4 md:space-y-0">
          {/* input box */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-gray-700 font-light">
              First Name <span className="text-primary">*</span>
            </h3>
            <input className="input-box" type="text" />
          </div>
          {/* last name input */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-gray-700 font-light">
              Last Name <span className="text-primary">*</span>
            </h3>
            <input className="input-box" type="text" />
          </div>
        </div>
        {/* name complete */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700 font-light">Company Name</h3>
          <input className="input-box" type="text" />
        </div>
        {/* company name complete */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700 font-light">
            Country/Region <span className="text-primary">*</span>
          </h3>
          <input className="input-box" type="text" />
        </div>
        {/* country end */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700 font-light">
            Street Address <span className="text-primary">*</span>
          </h3>
          <input className="input-box" type="text" />
        </div>
        {/* street address end */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700 font-light">
            Town/City <span className="text-primary">*</span>
          </h3>
          <input className="input-box" type="text" />
        </div>
        {/* country end */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700 font-light">
            Zip Code <span className="text-primary">*</span>
          </h3>
          <input className="input-box" type="text" />
        </div>
        {/* street address end */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700 font-light">
            Phone NUmber <span className="text-primary">*</span>
          </h3>
          <input className="input-box" type="number" />
        </div>
        {/* country end */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-gray-700 font-light">
            Email Address <span className="text-primary">*</span>
          </h3>
          <input className="input-box" type="email" />
        </div>
        {/* country end */}
      </form>
    </div>
  );
}

export default CheckoutFrom;
