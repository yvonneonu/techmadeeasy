import React from 'react'

function SideBar() {
  return (
    <div style = {{
        height:"100%",
        display:"flex",
        backgroundColor:"red",
        flexDirection:"column",
      
    }}>
      <span>DevHi</span>

        <span>Home</span>
        <span>Favorite</span>
    </div>
  )
}

export default SideBar