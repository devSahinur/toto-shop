import React from "react";

import AdminLayout from "../../components/Admin/AdminLayout";
import AdminFeed from "../../components/Admin/Feed/DashBorard/AdminFeed";
import ItemsFeed from "../../components/Admin/Feed/Items/ItemsFeed";

function Items() {
  return (
    <div>
      <AdminLayout>
        <ItemsFeed />
      </AdminLayout>
    </div>
  );
}

export default Items;
