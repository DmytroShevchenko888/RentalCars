import React from 'react'
import ferrariFront from '../../images/ferrariFront.png'

function Banner() {
  return (
    <section className='banner-section'>
      <div className="container">
        <div className="content">
          <div className="banner-content">
            <div className="banner-img">
              <img src={ferrariFront} alt="b-img" />
            </div>
            <div className="banner-title">
              <h1>
                Save big with our cheap car rental!
              </h1>
              <h3>
                Top Airports. Local Suppliers. <span>24/7</span> Support.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner