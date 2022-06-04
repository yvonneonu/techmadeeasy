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
          fontFamily:" Poppins, sans-serif",
          fontWeight:700,
          fontSize:"32px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
        }
      }>
        <span>Dev</span>
        <span style={{ color: "blue" }}>Hire</span>
      </div>

      <span onclicke = {clicked}>Home</span>
      <span>Favorite</span>
    </div>
  );
}

export default SideBar;
