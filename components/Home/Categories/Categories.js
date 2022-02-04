import categories from "../../../lib/categoryList";
import { SingleCategories } from "./SingleCategories";

export const Categories = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
        {/* <!-- single category --> */}

        {categories.slice(0, 6).map((data) => (
          <SingleCategories key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};
