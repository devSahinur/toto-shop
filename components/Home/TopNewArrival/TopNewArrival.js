import SingleArrival from "./SingleArrival";

const newProducts = [
  {
    id: 1,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/n3jvf6V/product8.jpg",
  },
  {
    id: 2,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/TBzx17p/product9.jpg",
  },
  {
    id: 3,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/HtTYwjV/product12.jpg",
  },
  {
    id: 4,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/2jHpJws/product1.jpg",
  },
];

export const TopNewArrival = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {newProducts.map((product) => (
          <SingleArrival key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
