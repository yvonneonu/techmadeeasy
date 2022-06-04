import React from 'react'

function Footer() {

    const fullYear = new Date().getFullYear
  return (
    <div style = {{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    }}>


        <div>{fullYear}</div>
        <div>&copy;</div>
    </div>
  )
}

export default Footer