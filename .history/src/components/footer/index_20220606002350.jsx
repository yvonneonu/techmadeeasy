import React, {useState} from "react";
import "./styles.css";
function Footer({ data, handleSelect }) {




  const [showCountry, setShowCountry] = useState(false)
  const fullYear = 2022;
  return (
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
          <button className="dropbtn">Dropdown</button>
          {showCountry && }
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
