import React from "react";

function SideBar() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px #D9DBE9 solid"
      }}
    >
      <div style={
        {
          fontFamily:|,
        }
      }>
        <span>Dev</span>
        <span style={{ color: "blue" }}>Hire</span>
      </div>

      <span>Home</span>
      <span>Favorite</span>
    </div>
  );
}

export default SideBar;
