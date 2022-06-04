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
  height:"30px",
  marginTop: "22px"
}}> 
  <span style={{ position: "absolute",top:0,left:0,height:"100%",width:"5px",backgroundColor:"blue"}}></span>

  <div style = {{width:"100px"}}>

  <span>Icon</span>
  <span onClick = {home} style={{
    marginLeft:10
  }}>Home</span>
  </div>
 
  </div>



  <div style ={{ 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  flexDirection: "row",
  height:"30px",
  marginTop: "22px"
}}> 

{home }
  <span style={{ position: "absolute",top:0,left:0,height:"100%",width:"5px",backgroundColor:"blue"}}></span>
  
  <div style = {{
    width:"100px"
  }}>



  <span>Icon</span>
<span onClick = {favourite} style={{ marginLeft:10}}>Favorite</span>
  </div>
  
 
  </div>

      
      
    </div>
  );
}

export default SideBar;
