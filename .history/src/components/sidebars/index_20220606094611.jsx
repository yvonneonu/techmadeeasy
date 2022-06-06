import React from "react";

function SideBar({ home, favourite, selected }) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px #D9DBE9 solid",
      }}
    >
      <div
        style={{
          fontFamily: " Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span>Dev</span>
        <span style={{ color: "blue" }}>Hire</span>
      </div>

      <div
        onClick={home}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          flexDirection: "row",
          height: "30px",
          marginTop: "22px",
        }}
      >
        {selected === "home" && (
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "5px",
              backgroundColor: "blue",
            }}
          ></span>
        )}
        <div style={{ width: "100px" }}>
          <span
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "blue",
              padding: "10px",
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>

          <span
            style={{
              marginLeft: 10,
            }}
          >
            Home
          </span>
        </div>
      </div>

      <div
        onClick={favourite}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          flexDirection: "row",
          height: "30px",
          marginTop: "22px",
        }}
      >
        {selected === "favourite" && (
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "5px",
              backgroundColor: "blue",
            }}
          ></span>
        )}

        <div
          style={{
            width: "100px",
          }}
        >
          <span
            style={selected === "favourite ? {
              width: "100px",
              height: "100px",
              backgroundColor: "blue",
              padding: "10px",
            }:}
          >
            <i className="fa fa-heart" aria-hidden="true"></i>
          </span>

          <span style={{ marginLeft: 10 }}>Favorite</span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
