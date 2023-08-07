import React from 'react'
import {FaPhoneAlt } from 'react-icons/fa'

function GlobalBanner() {
  return (
    <div className="global-banner">
        <div className="global-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a car by getting in touch with us</h2>
            <span>
              <FaPhoneAlt size='2rem' color='#fff'/>
              <h3>+38<b>(</b>067<b>)</b>123-45-67</h3>
            </span>
          </div>
        </div>
      </div>
  )
}

export default GlobalBanner