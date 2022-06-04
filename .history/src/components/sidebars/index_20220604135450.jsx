import React from "react";

function SideBar() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        backgroundColor: ""
        flexDirection: "column",
      }}
    >
      <div>
        <span>Dev</span>
        <span style={{ color: "blue" }}>Hire</span>
      </div>

      <span>Home</span>
      <span>Favorite</span>
    </div>
  );
}

export default SideBar;
