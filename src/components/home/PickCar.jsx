import React from 'react'
import {CAR_DATA} from "../CarData"
import CarBox from './CarBox';
import { useState } from 'react';

function PickCar() {

  const [active, setActive] = useState(0);

  const buttonActive = (id) => {
    return active === id ? "btn-active" : "";
  };

 
  return (
    <section className='pickcar-section'>
      <div className="container">
        <div className="content">
        <div className="pick-container__title">
          <h3>Vehicle Models</h3>
          <h1>Our rental fleet</h1>
          <p>
            Choose from a variety of our amazing vehicles to rent for your
            next adventure or business trip
          </p>
        </div>
        <div className="pick-car__content">
          <div className="pick-box">
            {CAR_DATA.map((cars,index) =>(
              <div key={index}>
                {cars.map((car) => (
                  <div key={car.id}>
                    <button className={`${buttonActive(car.id)}`} 
                    onClick={() => setActive(car.id)}>{car.name}
                    </button>
                  </div>
                ))}
              </div>
            ))}   
          </div>
          {<CarBox data={CAR_DATA} carID={active} />}
        </div>
        </div>
      </div>
    </section>
  )
}

export default PickCar