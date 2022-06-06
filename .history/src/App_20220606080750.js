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

  //const [currency,selectedCurrencies] = useState([])

  const fullYear = 2022;

  const switchPage = (pageName) => {
    setPage(pageName);
    setSelected(pageName);
  };

  const [currency, setCurrency] = useState([]);
  const [cardInfo, setCardinfo] = useState([]);

  const getData = useCallback(async () => {
    // const response = await axios.get(
    //   `https://api.terawork.com/service-categories/sellers-services/computer-software-development`
    // );
    // // setCardinfo(response.data.data.service_search_results.hits);
    // const res = response.data.data.service_search_results.hits.map((item) => {
    //   item.isFave = false;
    //   item.symbol = "N"
    //   return item;
    // });
    // setCardinfo(res);

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
              item.symbol = "N"
              return item;
            }
          );
          setCardinfo(res);
          setCurrency(secondResponse.data.data.currencies);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  const [currentCurrencies, setCurrentCurrency] = useState(currency[0])

  useEffect(() => {
    getData();
  }, [getData]);


  
  const converter = (amount,item) => amount * (item.divider)
  const handleSelectedCurrency = (item)=>{
    setCurrentCurrency(item)
    setShowCountry(false)

    setCardinfo(cardInfo.map(element => {
      element.amount = converter(element.amount, item)
      element.symbol = item.symbol
      return element
    } ))
  }




  


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
              <div>&copy;{fullYear}DevHire</div>
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
                          marginLeft: "5px",
                        }}
                      ></i>
                    ) : (
                      <i
                        onClick={() => setShowCountry(true)}
                        className="fa fa-caret-down"
                        aria-hidden="true"
                        style={{
                          marginLeft: "5px",
                        }}
                      ></i>
                    )}
                  </div>

                  {showCountry && (
                    <div className="dropdown-content">
                      {currency.map((item) => (
                        <div 
                        onClick={()=> handleSelectedCurrency(item)}
                        style = {{
                          cursor: 'pointer'
                        }}
                        key={item.id}>
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

            {/* <Footer data={data} /> */}
          </div>
        </div>
      </FavoriteContext.Provider>
    </div>
  );
}

export default App;
