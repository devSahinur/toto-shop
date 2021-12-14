import { useState } from "react";
import ShopMain from "./ShopMain/ShopMain";
import ShopTopNav from "./ShopNavTop/ShopTopNav";
import ShopList from "../ShopContent/ShopList/ShopList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ShopContent() {
  const [listView, setListView] = useState(false);
  // const [pagenation,setPagenation] = useState()

  return (
    <div className="flex-grow">
      <ShopTopNav listView={listView} setListView={setListView} />

      {/* render the view */}
      <div className="max-w[400px] mx-auto">
        {listView ? <ShopList /> : <ShopMain />}

        {/* pagenation */}
        <div className="w-fit mx-auto pt-10 pb-6">
          <Stack spacing={2}>
            <Pagination
              count={10}
              variant="outlined"
              color="secondary"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default ShopContent;
