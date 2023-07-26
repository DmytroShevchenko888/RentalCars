import React from 'react'
import {FaQuoteRight} from 'react-icons/fa';
import Toretto from '../../images/Toretto.png';
import shaw from '../../images/shaw.jpg';

function Testimonials() {
  return (
    <section className='testimonials-section'>
      <div className="container">
        <div className="content">
          <div className="testimonials-content__title">
            <h3>Reviewed by People</h3>
            <h2>Client's Testimonials</h2>
            <p>
              Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
            </p>
          </div>
          <div className="testimonials-content__cards">
            <div className="card">
              <span className='quotes-icon'>
                <FaQuoteRight/>
              </span>
              <p>
              "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
              </p>
              <div className="card_profile">
              <img src={Toretto} alt="user_img" />
                    <span>
                      <h4>Dominic Toretto</h4>
                      <p>Los Angeles</p>
                    </span>
              </div>
            </div>
            <div className="card">
              <span className='quotes-icon'>
                <FaQuoteRight/>
              </span>
              <p>
              "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"              </p>
              <div className="card_profile">
              <img src={shaw} alt="user_img" />
                    <span>
                      <h4>Deckard Shaw</h4>
                      <p>London</p>
                    </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials