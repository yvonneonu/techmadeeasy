import React, { useState, useEffect, useContext,useCallback } from "react";
import Card from "../../components/card";
import axios from "axios";
import { FavoriteContext } from "../../utilities/FavoriteContext";
function Home() {
  const [cardInfo, setCardinfo] = useState([]);
  const favoriteContainer = useContext(FavoriteContext);
  const [request, setRequest] = useState(true);

  const add = (item) => {
    if (favoriteContainer.fave.some((e) => e._id === item._id)) {
      alert("Already added to you fave");
    } else {
      let v = [...cardInfo];
      item.isFave = true;
      setCardinfo(v);
      favoriteContainer.setfave([...favoriteContainer.fave, item]);
      console.log(favoriteContainer.fave.length);
      console.log(favoriteContainer);
    }
  };

  const getData = useCallback(
    
  )
  
  
  


  const getDatay = useCallback(async () => {
    const response = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${query}`
    )
    setData(response.data)
  }, [query])

  useEffect(() => {
    if(request){
      getData();
    }
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
            key={item._id}
            style={{
              margin: "5px 10px",
            }}
          >
            <Card item={item} addToCart={() => add(item)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
