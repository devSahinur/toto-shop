import React, { useState } from "react";

import AdminFeed from "../../components/Admin/Feed/DashBorard/AdminFeed";
import ItemsFeed from "../../components/Admin/Feed/Items/ItemsFeed";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import AdminSidebar from "../../components/Admin/SidedeBar/AdminSidebar";

function Items({ products }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <div>
        {/* Top Header */}
        <AdminHeader
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        {/* Admin COntent */}
        <div className="flex relative">
          {/* Admin Sidebar  */}
          <AdminSidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <div className="flex-grow p-6 bg-[#F1F5F9] min-h-[90vh]">
            <ItemsFeed products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.HOST}/api/product`);
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
}
