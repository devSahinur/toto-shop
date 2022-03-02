import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import AdminFeed from "../../components/Admin/Feed/AdminFeed";

function index() {
  return (
    <div>
      <AdminLayout>
        <AdminFeed />
      </AdminLayout>
    </div>
  );
}

export default index;
