import React from "react";
import DashBorardTop from "./DashBorardTop";
import Chart from "./Chart";
import DashBoardBottom from "./DashBoardBottom";

function AdminFeed() {
  return (
    <div>
      {/* TODO: admin Top */}
      <DashBorardTop />
      {/* This is the cart */}
      <Chart />

      {/* DashBoard Bottom content */}
      <DashBoardBottom />
    </div>
  );
}

export default AdminFeed;
