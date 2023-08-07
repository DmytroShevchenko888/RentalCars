import Block from '../components/Block'
import GlobalBanner from '../components/GlobalBanner'
import {FULL_DATA_CAR} from '../components/FullData'
import {BsFuelPumpFill} from 'react-icons/bs'
import {PiEngineFill} from 'react-icons/pi'
import {AiFillStar} from 'react-icons/ai'
import {HiCog6Tooth} from 'react-icons/hi2'

function CarModels() {
  return (
    <section className='car-models'>
      <Block name="Car Models" />
      <div className="container">
        <div className="content">
          <div className="vehicle-cards">
            {FULL_DATA_CAR.map((car) => (
              <div className='card' key={car.id}>
                  <div className="card-img">
                    <img src={car.image} alt="car-img" />
                  </div>
                  <h5 className='car-title'>{car.name}</h5>
                    <div className="car-description">
                      <div className="power">
                        <PiEngineFill size='20px' />
                        <p>{car.power}</p>
                      </div>
                      <div className="fuel">
                        <BsFuelPumpFill size='19px' />
                        <p>{car.fuel}</p>
                      </div>
                      <div className="transmission">
                        <HiCog6Tooth size='20px' />
                        <p>{car.transmission}</p>
                      </div>
                      <div className="type">
                        <AiFillStar size='20px' />
                        <p>{car.type}</p>
                      </div>
                    </div>
                    <button className='button-red'>
                      <div className="price">
                        ${car.price}
                      </div>
                    </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GlobalBanner/>
    </section>
  )
}

export default CarModels