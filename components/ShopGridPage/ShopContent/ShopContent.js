import { useState } from "react";
import ShopMain from "./ShopMain/ShopMain";
import ShopTopNav from "./ShopNavTop/ShopTopNav";
import ShopList from "../ShopContent/ShopList/ShopList";

function ShopContent({currentItems}) {
  const [listView, setListView] = useState(false);
  // const [pagenation,setPagenation] = useState()

  return (
    <div className="flex-grow">
      <ShopTopNav listView={listView} setListView={setListView} />

      {/* render the view */}
      <div className="max-w[400px] mx-auto">
        {listView ? <ShopList currentItems={currentItems} /> : <ShopMain currentItems={currentItems} />}

        {/* pagenation */}
        <div className="w-fit mx-auto pt-10 pb-6">
        pagenation coming soon
        </div>
      </div>
    </div>
  );
}

export default ShopContent;
