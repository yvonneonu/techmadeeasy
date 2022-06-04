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

        <h2>Dropdown Menu</h2>
<p>Move the mouse over the button to open the dropdown menu.</p>

<div className="dropdown">
  <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
  <a href="#goo">Link 1</a>
  <a href="#goo">Link 2</a>
  <a>Link 3</a>
  </div>
</div>

<p><strong>Note:</strong> We use href="#" for test links. In a real web site this would be URLs.</p>


         </div>
    </div>
  )
}

export default Footer