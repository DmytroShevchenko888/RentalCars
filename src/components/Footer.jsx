import React from 'react'
import carlogo from '../images/carlogo.svg'
import {FaPhoneAlt } from 'react-icons/fa'
import {GrMail} from 'react-icons/gr';

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="content">
          <ul className="footer-content__1">
              <li>
                <div className="logo">
                  <img src={carlogo} alt="logo" />
                  <div className="logo-title">
                    <div>Rental</div>
                    <div>Cars</div>
                  </div>
                </div>
              </li>
              <li>
                <p>
                We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
                </p>
              </li>
              <li>
                <span className='contact-icons'><FaPhoneAlt/></span>
                <a href="tel:+380671234567">+38(067)123-45-67</a>
              </li>
              <li>
                <span><GrMail className='contact-icons'/></span>
                <a href="mailto:dmytro.shevchenko08@gmail.com">dmytro.shevchenko08@gmail.com</a>
              </li>
          </ul>
          <div className="footer-content__2">
            <ul>
              <li>
                <h4>
                  COMPANY
                </h4>
              </li>
              <li>
                <p>FAQ</p>
              </li>
              <li>
                <p>Careers</p>
              </li>
              <li>
                <p>Mobile</p>
              </li>
              <li>
                <p>Blog</p>
              </li>
              <li>
                <p>How we work ?</p>
              </li>
            </ul>
          </div>
          <div className="footer-content__3">
            <ul>
              <li>
                <h4>WORKING HOURS</h4>
              </li>
              <li>
                <p>Mon - Fri: 9:00 - 21:00</p> 
              </li>
              <li>
                <p>Sat: 9:00 - 18:00</p>
              </li>
              <li>
                <p>Sun: Closed</p>
              </li>
            </ul>
          </div>
          <div className="footer-content__4">
            <ul>
              <li>
                <h4>SUBSCRIPTION</h4>
              </li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder='Enter Email Address' />
              </li>
              <li>
                <button className='sub-btn'>Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer