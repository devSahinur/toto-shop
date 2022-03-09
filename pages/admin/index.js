import React, { useState } from "react";
import AdminFeed from "../../components/Admin/Feed/DashBorard/AdminFeed";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import AdminSidebar from "../../components/Admin/SidedeBar/AdminSidebar";

function index() {
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
            <AdminFeed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
