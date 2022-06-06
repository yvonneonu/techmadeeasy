import React, { useState,useCallback,useEffect } from "react";
import "./App.css";
import Footer from "./components/footer";
import SideBar from "./components/sidebars";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { FavoriteContext } from "./utilities/FavoriteContext";
import axios from "axios";

function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState("home");

  const [fave, setfave] = useState([]);

  const switchPage = (pageName) => {
    setPage(pageName);
    setSelected(pageName);
  };


  const [sele, setSele] = React.useState(data[0].categories[0]);

  const [cardInfo, setCardinfo] = useState([]);
  const getData = useCallback(
    async () => {
      const response = await axios.get(
        `https://api.terawork.com/service-categories/sellers-services/computer-software-development`
      );
      // setCardinfo(response.data.data.service_search_results.hits);
      const res = response.data.data.service_search_results.hits.map((item) => {
      item.isFave = false;
        return item;
      });
      setCardinfo(res);
    
  },[])
  


  useEffect(() => {
      getData(); 
  }, [getData]);


  return (
    <div className="App">
      <FavoriteContext.Provider value={{ fave, setfave }}>
        <div
          style={{
            flex: 0.5,
          }}
        >
          <SideBar
            home={() => switchPage("home")}
            favourite={() => switchPage("favourite")}
            selected={selected}
          />
        </div>

        <div
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            paddingLeft: "45px",
            paddingRight: "45px",
            paddingBottom: "45px",
          }}
        >
          {page === "home" && <Home data = {cardInfo}/>}
          {page === "favourite" && <Favourite />}

          <div
            style={{
              width: "100%",
            }}
          >
            <Footer />
          </div>
        </div>
      </FavoriteContext.Provider>
    </div>
  );
}

export default App;
