import React from 'react'

function Favourite() {




  const cardInfo 
  return (
      <div  style={{ 
        flex: 1,
        marginTop: "54px",
    }}>
 <span style={{
          color:"#14142B",
          fontSize: "32px",
          fontFamily:" Poppins, sans-serif",
          fontWeight:700,
          letterSpacing: "1px"
        }}>Favourite</span>




<div
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {cardInfo.map((item) => (
          <div        
            style={{
              margin: "5px 10px",
            }}
          >
            <Card item={item} addToCart={()=>add(item.id)}/>
          </div>
        ))}
      </div>
  
      </div>

  )
   
}

export default Favourite