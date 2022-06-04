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


        <div>&copy;{}</div>
        <div></div>
    </div>
  )
}

export default Footer