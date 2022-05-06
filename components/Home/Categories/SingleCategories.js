import Link from "next/link";

export const SingleCategories = ({ data }) => {
  return (
    <Link href={{ pathname: "/shop", query: { category: data.title } }}>
      <div className="group">
        <div className="relative group rounded-sm cursor-pointer overflow-hidden">
          <img
            src={data?.image}
            className="w-full transform transition-all  ease-in-out duration-700  group-hover:scale-125"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
          >
            {data?.title}
          </div>
        </div>
      </div>
    </Link>
  );
};
