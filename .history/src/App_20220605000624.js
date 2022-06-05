import React, { useState, createContext } from "react";
import "./App.css";
import Footer from "./components/footer";
import SideBar from "./components/sidebars";
import Favourite from "./pages/Favourite";
import Home from "./pages/Home";


function App() {
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState("home");
  const ThemeContext = createContext([]);
  const switchPage = (pageName) => {
    setPage(pageName);
    setSelected(pageName);
  };
  return (
    <ThemeContext.Provider>

    </ThemeContext.Provider>
    
  );
}

export default App;
