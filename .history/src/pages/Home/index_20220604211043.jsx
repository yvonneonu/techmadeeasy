import React, { useState,useEffect } from "react";
import Card from "../../components/card";
import axios from "axios";

function Home() {


    const [cardInfo, setCardinfo] = useState([])

   

    const getData = async () => {
      const  data  = await axios.get(`https://api.terawork.com/service-categories/sellers-services/computer-software-development`);
      console.log(data.data.data.service_search_results);
    };
    useEffect(() => {
        // Update the document title using the browser API
        getData() 
      },[])
    
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
