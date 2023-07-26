import React from 'react'
import peugeottop from '../../images/peugeottop.png';
import {IoPricetags,IoWalletSharp} from 'react-icons/io5'
import {BiSupport} from 'react-icons/bi'


function ChooseUS() {
  return (
    <section className='chooseus-section'>
      <div className="container">
        <div className="content">
          <div className="chooseus-content">
            <div className="chooseus-img">
              <img src={peugeottop} alt="choose-img" />
            </div>
            <div className="chooseus-servise">
              <div className="chooseus-title">
                <h3>
                    Best Services
                </h3>
                <h1>
                    Feel the best experience with our rental deals
                </h1>
              </div>
              <div className="servise-cards">
                <div className="card">
                  <div className="icon-box">
                    <IoPricetags className='card-icon'/>
                  </div>
                  <div className="card-info">
                    <h3>Deals for every budget</h3>
                    <p>Incredible prices on hotels, flights, cars andpackages worldwide.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon-box">
                    <IoWalletSharp className='card-icon'/>
                  </div>
                  <div className="card-info">
                    <h3>Best prise guaranteed</h3>
                    <p>Find a lower price? We'll refund you 100% of the difference.</p>
                  </div>
                </div>
                <div className="card">
                  <div className="icon-box">
                    <BiSupport className='card-icon'/>
                  </div>
                  <div className="card-info">
                    <h3>Support 24/7</h3>
                    <p>Our knowledgeable and friendly operators are always ready to help. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUS