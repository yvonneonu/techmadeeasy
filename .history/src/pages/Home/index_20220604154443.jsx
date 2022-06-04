import React from "react";
import Card from "../../components/card";

function Home({clicked}) {
  return (
    <div
      style={{
        flex: 1,
        marginTop: "54px",
      }}
    >
      <div
      onClick={clicked}
        style={{
          color:"#14142B",
          fontSize: "32px",
          fontFamily:" Poppins, sans-serif",
          fontWeight:700,
          letterSpacing: "1px"
        }}
      >
        Hire Top developer
      </div>
      <Card />
    </div>
  );
}

export default Home;
