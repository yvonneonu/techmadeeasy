import React, { useState } from 'react';
import "./App.css";
import SideBar from "./components/sidebars";
import Home from "./pages/Home";

function App() {

  const [page, setPage] = useState("home")
  return (
    <div className="App">
      <SideBar style={{
        flex:1
      }} />
      { page === "home" &&   <Home />}
      {page === ""}
     
    </div>
  );
}

export default App;
