import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import UserFeed from "../../components/Admin/Feed/Users/UserFeed";

function users() {
  return (
    <div>
      <AdminLayout>
        <UserFeed />
      </AdminLayout>
    </div>
  );
}

export default users;
