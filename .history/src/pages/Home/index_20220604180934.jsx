import React from "react";
import Card from "../../components/card";

function Home() {


    const [cardInfo, setCardinfo] = useStat
  return (
    <div
  
      style={{
        flex: 1,
        marginTop: "54px",
      }}
    >
      <div
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
