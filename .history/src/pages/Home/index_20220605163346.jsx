import React, { useState, useEffect, useContext } from "react";
import Card from "../../components/card";
import axios from "axios";
import { FavoriteContext } from "../../utilities/FavoriteContext";
function Home() {
  const [cardInfo, setCardinfo] = useState([]);
  const favoriteContainer = useContext(FavoriteContext);

  // const [item, setItem] = useState({
  //   name:"",
  //   avatar:"",
  //   service_photo:"",
  //   unit_price:""
  // })

  const add = (item) => {
    // if(favoriteContainer.fave.!== item._id)

    if (favoriteContainer.fave.some((e) => e._id === item._id)) {
      /* vendors contains the element we're looking for */
      alert("Already added to you fave");
    } else {
      let v = [...cardInfo];
    item.isFave = true
      setCardinfo();
      favoriteContainer.setfave([...favoriteContainer.fave, item]);
      // console.log(item)
      console.log(favoriteContainer.fave.length);
      console.log(favoriteContainer);
    }
    // favoriteContainer.setfave([...favoriteContainer.fave,item]);
    // // console.log(item)
    // console.log(favoriteContainer.fave.length)
    // console.log(favoriteContainer)
  };

  const handleUpdate = () => {
    let v = [...cardInfo];
    item.isFave = true
   
    v[1].age = 99;
    setUser(v);
   
  };
  const getData = async () => {
    const response = await axios.get(
      `https://api.terawork.com/service-categories/sellers-services/computer-software-development`
    );
    // setCardinfo(response.data.data.service_search_results.hits);
    const res = response.data.data.service_search_results.hits.map((item) => {
      item.isFave = false;
      return item;
    });
    setCardinfo(res);
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
