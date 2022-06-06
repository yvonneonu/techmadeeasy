import React from "react";
import "./styles.css";
function Footer({ data, handleSelect }) {
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
          {}
          <div className="dropdown-content">
            {data.map((item) => (
              <span>{item.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
