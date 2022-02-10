export const ProductDetails = ({ product }) => {
  return (
    <div className="container pb-16">
      {/* <!-- detail buttons --> */}
      <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
        Product Details
      </h3>
      {/* <!-- details button end --> */}

      {/* <!-- details content --> */}
      <div className="lg:w-4/5 xl:w-3/5 pt-6">
        <div className="space-y-3 text-gray-600">
          <p>{product.longDescription.slice(0, 300)}</p>
          <p>{product.longDescription.slice(300, 700)}</p>
          <p>{product.longDescription.slice(300)}</p>
        </div>
        {/* <!-- details table --> */}
        <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Color
            </th>
            <td className="py-2 px-4 border border-gray-300">
              {product.color}
            </td>
          </tr>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Material
            </th>
            <td className="py-2 px-4 border border-gray-300">
              {product.material}
            </td>
          </tr>
          <tr>
            <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
              Weight
            </th>
            <td className="py-2 px-4 border border-gray-300">
              {product.weight} KG
            </td>
          </tr>
        </table>
        {/* <!-- details table --> */}
      </div>
      {/* <!-- details content end --> */}
    </div>
  );
};
