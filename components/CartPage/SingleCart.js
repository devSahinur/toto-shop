export const SingleCart = () => {
  return (
    <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
      {/* <!-- cart image --> */}
      <div className="w-32 flex-shrink-0">
        <img src="https://i.ibb.co/TBzx17p/product9.jpg" className="w-full" />
      </div>
      {/* <!-- cart image end --> */}
      {/* <!-- cart content --> */}
      <div className="md:w-1/3 w-full">
        <h2 className="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
          Italian L Shape Sofa
        </h2>
        <p className="text-primary font-semibold">$45.00</p>
        <p className="text-gray-500">Size: M</p>
      </div>
      {/* <!-- cart content end --> */}
      {/* <!-- cart quantity --> */}
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
          -
        </div>
        <div className="h-8 w-10 flex items-center justify-center">4</div>
        <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
          +
        </div>
      </div>
      {/* <!-- cart quantity end --> */}
      <div className="ml-auto md:ml-0">
        <p className="text-primary text-lg font-semibold">$320.00</p>
      </div>
      <div className="text-gray-600 hover:text-primary cursor-pointer">
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};
