import React from 'react'

function SideBar() {
  return (
    <div style = {{
        height:"100%",
        display:"flex",
        backgroundColor:"red",
        flexDirection:"column",
      
    }}>
      <div><span>Dev</span> <span>Hire</span></div>

        <span>Home</span>
        <span>Favorite</span>
    </div>
  )
}

export default SideBar