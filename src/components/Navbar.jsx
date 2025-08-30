import React from 'react'

function Navbar() {

  function toUpperCaseText(text){
    return text.toUpperCase();
  }

  return (
    <>
    <div className='Navbar'>
      <h1 className='Navbar_logo'>logo</h1>

      <div className="Navbar_link">
      <a href="#">{toUpperCaseText('about us')}</a>
      <a href="#">{toUpperCaseText('contact')}</a>
      <a href="#">{toUpperCaseText('tel')}</a>
      <a href="#">{toUpperCaseText('menu')}</a>
      </div>

    </div>
    </>
  )
}

export default Navbar
