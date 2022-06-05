import React, { useState,useEffect } from "react";
import Card from "../../components/card";

function Home() {


    const [cardInfo, setCardinfo] = useState([])

    import axios from "axios";

    const getData = async () => {
      const { data } = await axios.get(`https://yesno.wtf/api`);
      setData(data);
    };
    useEffect(() => {
        // Update the document title using the browser API
        
      })
    
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
      {cardInfo.map(item =>  <Card />)}
     
    </div>
  );
}

export default Home;