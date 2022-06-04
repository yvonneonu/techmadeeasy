import React from 'react'

function SideBar() {
  return (
    <div style = {{
        height:"100%",
        display:"flex",
        backgroundColor:"red",
        flexDirection:"column",
    }}>

        <span>Developers</span>
        <span>Favorite</span>
    </div>
  )
}

export default SideBar