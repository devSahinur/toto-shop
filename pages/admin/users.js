import React, { useState } from "react";
import UserFeed from "../../components/Admin/Feed/Users/UserFeed";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import AdminSidebar from "../../components/Admin/SidedeBar/AdminSidebar";

function users() {
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
            <UserFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default users;
