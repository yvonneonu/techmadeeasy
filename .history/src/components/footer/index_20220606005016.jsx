import React, { useState } from "react";
import "./styles.css";
function Footer({ data, handleSelect }) {
  const [showCountry, setShowCountry] = useState(false);
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
          <span className="dropbtn">{data[0]?.name}</span>
          {showCountry ? (
            <i 
            onClick = {}
            className="fa fa-caret-down" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-caret-up" aria-hidden="true"></i>
          )}

          {showCountry && (
            <div className="dropdown-content">
              {data.map((item) => (
                <span>{item.name}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
