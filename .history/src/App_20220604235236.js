import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import SideBar from "./components/sidebars";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState("home");

  const switchPage = (pageName) => {
    setPage(pageName);
    setSelected(pageName);
  };
  return (
    <div className="App">
      <div
        style={{
          flex: 0.5,
          position:"static",
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
        {page === "home" && <Home />}
        {page === "favourite" && <Favourite/>}

        <div
          style={{
            width: "100%",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
