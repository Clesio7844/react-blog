import React from 'react'
import './style.css';

/**
* @author
* @function 
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerManu">
        <a href='#'>Home</a>
        <a href='#'>About US</a>
        <a href='#'>Contact US</a>
        
        </nav>
        <div>
            socila Media links
        </div>
    </header>
   )

 }

export default Header;