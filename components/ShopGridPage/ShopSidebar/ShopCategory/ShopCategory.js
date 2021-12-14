function ShopCategory({ setvalue, number, category }) {
  return (
    <div className="flex items-center justify-between pb-2">
      <label class="flex items-center space-x-3">
        <input
          type="checkbox"
          class="form-checkbox text-primary rounded-md p-2"
          value={category}
          onChange={(e) => setvalue(category)}
        />
        <span class="ml-2">{category}</span>
      </label>
      {number && <span>({number})</span>}
    </div>
  );
}

export default ShopCategory;
