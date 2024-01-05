import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
 const [isMobile, setIsMobile] = useState(false);
 
 return(
  <nav className='navbar'>
    <h3 className='logo'><span>Port</span>folio</h3>
    <ul className={isMobile ? "nav-links-mobile": "nav-links"}
     onClick={() => setIsMobile(false)}>
      <Link to="/" className='home'>
      <li>Home</li>
      </Link>
      <Link to="/About" className='about'>
      <li>About</li>
      </Link>
      <Link to="/Work" className='work'>
      <li>Work</li>
      </Link>
      <Link to="/Skill" className='skill'>
      <li>Skill</li>
      </Link>
      <Link to="/Contact" className='contact'>
      <li>Contact</li>
      </Link>
       
    </ul>
    <button className='mobile-menu-icon'
    onClick={() => setIsMobile(!isMobile)}>
                          {isMobile ? (<i className='fas fa-times'></i> )
                        : 
                         (<i className='fas fa-bars'></i>)}
                       </button>
  </nav>
 )
}

export default Header