import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import carlogo from '../images/carlogo.svg'

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <header className='nav-bar'>
      <div className="container">
        <div className={nav ? ["nav-content", "active"].join(' ') : ["nav-content"]}>
         <Link onClick={openNav} to="/">
          <div className="logo">
              <img src={carlogo} alt="logo" />
              <div className="logo-title">
                <div>Rental</div>
                <div>Cars</div>
              </div>
            </div>
         </Link>
          <ul className="nav-menu">
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                  About
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                  Car Models
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
                  Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                  Our Team
              </Link> 
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                  Contact
              </Link> 
            </li>
          </ul>
          <div className="nav-register">
            <button onClick={openNav} className='button-gray'><div>Sign in</div></button>
            <button onClick={openNav} className='button-red'><div>Register</div></button>
          </div>
        </div>
        <Link onClick={openNav} to="/">
          <div className="logo-mobile">
            <img src={carlogo} alt="logo" />
            <div className="logo-title">
              <div>Rental</div>
              <div>Cars</div>
            </div>
          </div>
        </Link>
        
        <div onClick={openNav} className='mobile-btn'>
          {!nav ? <FaBars/> : <FaTimes/>} 
        </div> 
      </div>  
    </header>
  )
}

export default Navbar