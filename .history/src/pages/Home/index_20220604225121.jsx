import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import axios from "axios";

function Home() {
  const [cardInfo, setCardinfo] = useState([]);
  const [added, setAdded] = useState([])



  const add = ()=>{
    setAdded([...added,card])
  }
  const getData = async () => {
    const response = await axios.get(
      `https://api.terawork.com/service-categories/sellers-services/computer-software-development`
    );
    setCardinfo(response.data.data.service_search_results.hits);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        flex: 1,
        marginTop: "54px",
      }}
    >
      <div
        style={{
          color: "#14142B",
          fontSize: "32px",
          fontFamily: " Poppins, sans-serif",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        Hire Top developer
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {cardInfo.map((item) => (
          <div        
            style={{
              margin: "5px 10px",
            }}
          >
            <Card item={item} addToCart={()=>}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
