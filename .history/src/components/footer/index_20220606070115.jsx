import React, { useState } from "react";
import "./styles.css";
function Footer({data}) {
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
          <div className="dropbtn">
            <span>{data[0]?.name}</span>
            {showCountry ? (
            <i
              onClick={() => setShowCountry(false)}
              className="fa fa-caret-up"
              aria-hidden="true"
              style = {{
                marginLeft:"5px"
              }}
            ></i>
          ) : (
            <i
              onClick={() => setShowCountry(true)}
              className="fa fa-caret-down"
              aria-hidden="true"
              style = {{
                marginLeft:"5px"
              }}
            ></i>
          )}
          
          </div>
        

          {showCountry && (
            <div className="dropdown-content">
              {data.map((item) => (
                <div>

                </div>
                <img src =  key = {item.id}
                >{item?.name}</img>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;