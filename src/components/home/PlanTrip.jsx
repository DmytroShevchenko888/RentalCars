import React from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {FaCalendarCheck,FaCalendarPlus} from 'react-icons/fa'

function PlanTrip() {
  return (
    <section className='plan-trip'>
      <div className="conatiner">
        <div className="content">
          <div className="plan-trip__box">
            <h3>Plan your trip now</h3>
            <h1>Quick & easy car rental</h1>
            <div className="plan-trip__content">
              <div className="trip-card">
                <div className='icon-box'><FaLocationDot className='trip-icon'/></div>
                <h3>
                  Choose a location
                </h3>
                <p>See 3 popular hotels at a heavily discounted price.</p>
              </div>
              <div className="trip-card">
                <div className='icon-box'><FaCalendarCheck className='trip-icon'/></div>
                <h3>
                  Pick-up date
                </h3>
                <p>Click choose we'll pick one of the 3 hotels</p>
              </div>
              <div className="trip-card">
                <div className='icon-box'><FaCalendarPlus className='trip-icon'/></div> 
                <h3>
                  Book yor car
                </h3>
                <p>See witch hotel right after you book!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanTrip