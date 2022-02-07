import SingleArrival from "./SingleArrival";

export const TopNewArrival = (props) => {
  const products = props.products.reverse();
  const productCat = products.slice(0, 4);

  return (
    <div className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {productCat?.map((product) => (
          <SingleArrival key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
