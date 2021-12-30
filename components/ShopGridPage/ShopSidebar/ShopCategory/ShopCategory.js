function ShopCategory({ setvalue, number, category }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id="Bedroom"
        value={category}
        onChange={(e) => setvalue(category)}
        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
      />
      <label  className="text-gray-600 ml-3 cursor-pointer">
        {category}
      </label>
      <div className="ml-auto text-gray-600 text-sm">({number || 8})</div>
    </div>
  );
}

export default ShopCategory;
