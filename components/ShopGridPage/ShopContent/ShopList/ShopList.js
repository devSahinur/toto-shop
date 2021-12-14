import SingleShopItem from "./SingleShopItem";

const products = [
  {
    id: 1,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/2jHpJws/product1.jpg",
    hot: true,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.",
  },
  {
    id: 2,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/mCdRt0s/product2.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.",
  },
  {
    id: 3,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/M8LrQyQ/product3.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.",
  },
  {
    id: 4,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/9rn0tSy/product4.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.",
  },
  {
    id: 5,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/tsZybpt/product5.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.",
  },
  {
    id: 6,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/2nfH6ZX/product6.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.",
  },
  {
    id: 7,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/xg8fwz4/product7.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.",
  },
  {
    id: 8,
    title: "Guyer chair",
    price: 45.0,
    rating: 150,
    image: "https://i.ibb.co/N2C78ws/product11.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.",
  },
];

function ShopMain() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {products.map((product) => (
        <SingleShopItem
          key={product.id}
          product={product}
          hot={product.hot && product.hot}
        />
      ))}
    </div>
  );
}

export default ShopMain;
