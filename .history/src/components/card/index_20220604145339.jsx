import React from 'react'

function Card() {
  return (
    <div
    style = {{
        width:"238px",
        height:"224px",
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#FFFFFF"
    }}
    >

        <div style = {{ 
            width:"238px",
            height:"139px",
        }}>
            image
        </div>
        <div style = {{
            position:"absolute",
            width
            top:"120px",
            left:"10px",
            borderRadius:"50%",
        }}>
            avatar
        </div>
        <div style = {{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>

        </div>


    </div>
  )
}

export default Card