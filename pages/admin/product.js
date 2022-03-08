import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import ProductFeed from "../../components/Admin/Feed/Product/ProductFeed";
function NewUsers() {
  return (
    <div>
      <AdminLayout>
        <ProductFeed />
      </AdminLayout>
    </div>
  );
}

export default NewUsers;
