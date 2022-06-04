import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import SideBar from "./components/sidebars";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState("favourite");

  return (
    <div className="App">
      <div
        style={{
          flex: 1,
          height: "100vh",
        }}
      >
        <SideBar />
      </div>

      <div
        style={{
          flex: 2,
        }}
      >
        {page === "home" && <Home clicked={setPage} />}
        {page === "favourite" && <Favourite />}


        <Footer/>
      </div>
    </div>
  );
}

export default App;
