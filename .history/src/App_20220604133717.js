import React, { useState } from 'react';
import "./App.css";
import SideBar from "./components/sidebars";
import Favourite from './pages/Favourite';
import Home from "./pages/Home";

function App() {

  const [page, setPage] = useState("favourite")

  
  return (
    <div className="App">
      <div style={styles.container}></div>
      <SideBar/>
      <div style={{
        flex:2
      }}>
      {page === "home" &&   <Home clicked = {setPage}/>}
      {page === "favourite" && <Favourite/>}
      </div>
     
     
     
    </div>
  );
}

export default App;
