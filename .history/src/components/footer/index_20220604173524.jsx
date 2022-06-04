import React from 'react'

function Footer() {

    const fullYear = 2022
  return (
    <div style = {{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    }}>


        <div>&copy;{fullYear}</div>
        <div>

            


        </div>
    </div>
  )
}

export default Footer