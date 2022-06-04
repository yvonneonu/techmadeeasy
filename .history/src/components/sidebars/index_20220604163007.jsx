import React from "react";

function SideBar({home,favourite}) {
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

<div style ={{ 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  flexDirection: "row",
  height:"50px"
}}> 
  <span style={{ position: "absolute",top:0,left:0,height:"100%",wi}}></span>
  <span>Icon</span>
  <span onClick = {home} style={{  marginTop: "22px"}}>Home</span>
  </div>
      
      <span onClick = {favourite} style={{ marginTop: "41px"}}>Favorite</span>
    </div>
  );
}

export default SideBar;
