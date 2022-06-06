import React from "react";
import './styles.css'
function Footer({data, handleSelect}) {
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
          <div className="dropdown-content">
            {data.map(ite)}
            <a href="#goo">Link 1</a>
            <a href="#goo">Link 2</a>
            <a href="#goo">Link 3</a>
          </div>
        </div>



        <select onChange={handleSelect}>
        {data.map((item) =>
          item.categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        )}
      </select>
      </div>
    </div>
  );
}

export default Footer;
