import React, { useState } from 'react';
import "./App.css";
import SideBar from "./components/sidebars";
import Favourite from './pages/Favourite';
import Home from "./pages/Home";

function App() {

  const [page, setPage] = useState("favourite")

  
  return (
    <div className="App">
      <SideBar style={{
        flex:1
      }} />
      <div style={{
        flex:2
      }}>
      {page === "home" &&   <Home se/>}
      {page === "favourite" && <Favourite/>}
      </div>
     
     
     
    </div>
  );
}

export default App;
