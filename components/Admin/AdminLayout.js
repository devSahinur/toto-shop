import React, { useState } from "react";
import AdminHeader from "./Header/AdminHeader";
import AdminSidebar from "./SidedeBar/AdminSidebar";

function AdminLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      {/* Top Header */}
      <AdminHeader showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/* Admin COntent */}
      <div className="flex relative">
        {/* Admin Sidebar  */}
        <AdminSidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
