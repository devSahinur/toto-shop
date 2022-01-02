function BlogSideBar() {
  return (
    <div className={`px-4 py-6 shadow-lg rounded-md border pl-6 h-fit`}>
      {/* category */}
      <div className="space-y-4">
        <h1 className="text-lg text-primary uppercase font-medium">
          Post category
        </h1>
        {/* categorys */}
        <div className="flex flex-col uppercase font-medium text-gray-700 pl-4 space-y-2">
          <span className="hover:text-primary cursor-pointer transition-all">
            All
          </span>
          <span className="hover:text-primary cursor-pointer transition-all">
            announcement
          </span>
          <span className="hover:text-primary cursor-pointer transition-all">
            Daily news
          </span>
          <span className="hover:text-primary cursor-pointer transition-all">
            my posts
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogSideBar;
