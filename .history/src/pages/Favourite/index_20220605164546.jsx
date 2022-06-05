import React, { useContext } from "react";
import Card from "../../components/card";
import { FavoriteContext } from "../../utilities/FavoriteContext";

function Favourite() {
  const cardInfo = useContext(FavoriteContext);
  return (
    <div
      style={{
        flex: 1,
        marginTop: "54px",
      }}
    >
      <span
        style={{
          color: "#14142B",
          fontSize: "32px",
          fontFamily: " Poppins, sans-serif",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        Favourite
      </span>



      {cardInfo.length > 0 ? 

      
     
      :
      }

     

      
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
     You do not have any developer on your favorite List
    </div>






    </div>
  );
}

export default Favourite;
