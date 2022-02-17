import SingleArrival from "../../../Home/TopNewArrival/SingleArrival";


function ShopMain({ currentItems }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {currentItems.map((product) => (
        <SingleArrival
          key={product._id}
          product={product}
          hot={product.hot && product.hot}
        />
      ))}
    </div>
  );
}

export default ShopMain;
