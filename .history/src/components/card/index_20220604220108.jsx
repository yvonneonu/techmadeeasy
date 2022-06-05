import React from 'react'

function Card({item}) {
  return (
    <div
    style = {{
        width:"238px",
        height:"224px",
        display:"flex",
        position:"relative",
        flexDirection:"column",
        border:"1px solid gray",
        borderRadius:"5px",
        backgroundColor:"#FFFFFF"
    }}
    >


        <div  style = {{ 
            height:"10px",
            position:"absolute",
            top:"10px",
            right:"10px",
        }}>
            favourite
        </div>

        <div style = {{ 
            width:"238px",
            height:"139px",
            backgroundColor:"cyan"
        }}>
            <img src = {item._source.service_photo} alt = "portfolio" style = {{
                width:"100%",
                height:"100%",
             }}  />
        </div>
        <div style = {{
            position:"absolute",
            width:"50px",
            height:"50px",
            top:"120px",
            left:"10px",
        }}>
            <img src = {item._source.avatar} alt = "portfolio" style = {{
                width:"100%",
                height:"100%",
                borderRadius:"50%",
             }}  />
        </div>
        <div style = {{
            marginTop:"50px",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
           
            <div>{item._source.display_name}</div>
            <div>Hire</div>
        </div>


    </div>
  )
}

export default Card