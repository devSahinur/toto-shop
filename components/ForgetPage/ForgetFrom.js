function ForgetFrom() {
  return (
    <div className="max-w-[700px] xl:max-w-[500px] mx-auto bg-white shadow-md rounded border py-8 px-6 space-y-6">
      <div className="space-y-3">
        <h1 className="text-3xl uppercase font-medium text-gray-700">
          Reset password
        </h1>
        <p className="text-md text-gray-600">
          Please enter your email address below to receive a link.
        </p>
      </div>
      {/* email */}
      <div className="flex flex-col space-y-4">
        <h3 className="text-gray-700 text-lg">
          Email Address <span className="text-primary">*</span>
        </h3>
        <input
          className="input-box"
          type="email"
          placeholder="example@gmail.com"
        />
      </div>
      {/* reset button */}
      <button className="btn uppercase py-2 font-medium text-sm">
        reset my password
      </button>
    </div>
  );
}

export default ForgetFrom;
