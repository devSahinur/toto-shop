import React from "react";

import AdminLayout from "../../components/Admin/AdminLayout";
import CusTomerFeed from "../../components/Admin/Feed/Customer/CusTomerFeed";
import AdminFeed from "../../components/Admin/Feed/DashBorard/AdminFeed";

function Customers() {
  return (
    <div>
      <AdminLayout>
        <CusTomerFeed />
      </AdminLayout>
    </div>
  );
}

export default Customers;
