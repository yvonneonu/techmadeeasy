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


        <div>year</div>
        <div>dropdown</div>
    </div>
  )
}

export default Footer