import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import SideBar from "./components/sidebars";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";
import { FavoriteContext } from "./utilities/FavoriteContext";
import axios from "axios";

function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState("home");
  const [fave, setfave] = useState([]);
  const [showCountry, setShowCountry] = useState(false);

  const fullYear = 2022;

  const switchPage = (pageName) => {
    setPage(pageName);
    setSelected(pageName);
  };

  const [currency, setCurrency] = useState([]);
  const [cardInfo, setCardinfo] = useState([]);
  const [currentCurrencies, setCurrentCurrency] = useState(currency[0]);
  const getData = useCallback(async () => {
    axios
      .all([
        await axios.get(
          `https://api.terawork.com/service-categories/sellers-services/computer-software-development`
        ),
        await axios.get(`https://api.terawork.com/resources`),
      ])
      .then(
        axios.spread((firstResponse, secondResponse) => {
          const res = firstResponse.data.data.service_search_results.hits.map(
            (item) => {
              item.isFave = false;
              item.symbol = secondResponse.data.data.currencies[0].symbol;
              return item;
            }
          );
          setCardinfo(res);
          setCurrency(secondResponse.data.data.currencies);
          setCurrentCurrency(secondResponse.data.data.currencies[0])
        })
      )
      .catch((error) => console.log(error));
  }, []);

  

  useEffect(() => {
    getData();
  }, [getData]);

  const converter = (amount, item) => amount * item.divider;
  const handleSelectedCurrency = (item) => {
    setCurrentCurrency(item);
    setShowCountry(false);

    setCardinfo(
      cardInfo.map((element) => {
        const numb =  Math.round(
          (converter(element._source.service_packages[1].unit_price, item) +
            Number.EPSILON) *
            100
        ) / 100

        element._source.service_packages[1].unit_price = numb
        element.symbol = item.symbol;
        return element;
      })
    );
  };

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
          {page === "home" && <Home data={cardInfo} />}
          {page === "favourite" && <Favourite />}

          <div
            style={{
              width: "100%",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style = {{ color: "#8692A6",fontWeight:500, fontSize:"14px"}}>
                <span>&copy;</span>
                <span style = {{ 
                  margin: "0 5px"
                }}>{fullYear}</span>
                <span>DevHire</span>
                
                </div>
              <div>
                <div className="dropdown">
                  <div className="dropbtn">
                    <img
                      src={currentCurrencies?.flag_url}
                      alt="flag"
                      style={{
                        width: "10px",
                        height: "10px",
                        marginRight: "10px",
                      }}
                    />
                    <span>{currentCurrencies?.name}</span>
                    
                    {showCountry ? (
                      <i
                        onClick={() => setShowCountry(false)}
                        className="fa fa-caret-up"
                        aria-hidden="true"
                        style={{
                          marginLeft: "15px",
                        }}
                      ></i>
                    ) : (
                      <i
                        onClick={() => setShowCountry(true)}
                        className="fa fa-caret-down"
                        aria-hidden="true"
                        style={{
                          marginLeft: "15px",
                        }}
                      ></i>
                    )}
                  </div>

                  {showCountry && (
                    <div className="dropdown-content">
                      {currency.map((item) => (
                        <div
                          onClick={() => handleSelectedCurrency(item)}
                          style={{
                            cursor: "pointer",
                          }}
                          key={item.id}
                        >
                          <img
                            src={item?.flag_url}
                            alt="flag"
                            style={{
                              width: "10px",
                              height: "10px",
                              marginRight: "10px",
                            }}
                          />
                          <span>{item?.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FavoriteContext.Provider>
    </div>
  );
}

export default App;
