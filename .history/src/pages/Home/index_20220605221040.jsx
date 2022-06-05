import React, { useContext} from "react";
import Card from "../../components/card";

import { FavoriteContext } from "../../utilities/FavoriteContext";
function Home({data}) {


  // const [cardInfo, setCardinfo] = useState(data);
  const favoriteContainer = useContext(FavoriteContext);

  const add = (item) => {
    if (favoriteContainer.fave.some((e) => e._id === item._id)) {
      alert("Already added to you fave");
    } else {
      // let v = [...data];
      item.isFave = true;
      // setCardinfo(v);
      favoriteContainer.setfave([...favoriteContainer.fave, item]);
    }
  };

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
        {data.map((item) => (
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
