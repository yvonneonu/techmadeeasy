import React from 'react'

function Card() {
  return (
    <div
    style = {{
        width:"238px",
        height:"224px",
        display:"flex",
        position:"relative",
        flexDirection:"column",
        backgroundColor:"#FFFFFF"
    }}
    >


        <div

        <div style = {{ 
            width:"238px",
            height:"139px",
        }}>
            image
        </div>
        <div style = {{
            position:"absolute",
            width:"50px",
            height:"50px",
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