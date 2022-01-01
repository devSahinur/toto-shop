function SingleCheckoutOrder({ id, title, size, quantity, price }) {
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-3">
        <h3 className="font-medium pb-1">{title}</h3>
        <span className="text-gray-600">Size: {size}</span>
      </div>
      {/* left end */}
      <p className="font-medium text-base">X{quantity}</p>
      {/* quentity end */}
      <span className="font-medium text-base">${price}</span>
    </div>
  );
}

export default SingleCheckoutOrder;
