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
        bor
        backgroundColor:"#FFFFFF"
    }}
    >


        <div  style = {{ 
            width:"238px",
            height:"139px",
            position:"absolute",
            top:"10px",
            right:"10px",
        }}>
            favourite
        </div>

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

            <div>Name</div>
            <div>Hire</div>
        </div>


    </div>
  )
}

export default Card