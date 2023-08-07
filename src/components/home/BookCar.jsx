import {CAR_DATA} from "../CarData"
import {FaCalendarAlt, FaCar, } from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'


function BookCar() {

  return (
    <section className='book-car'>
      <div className="container">
        <div className="content">
          <div className="book-content__box">
          <h2>Book a car</h2>
            <form className='box-form'>
              <div className="box-form__content">
                <label>
                <FaCar className='label-icon'/>
                &nbsp;  Select Your Car Type <b>*</b>
                </label>
                <select>
                  <option value="">Select your car type</option>
                  {CAR_DATA.map((cars,index) => (
                    <option key={index}>
                    {cars.map((car)=>(
                      <option value="" key={car.id}>{car.name}</option>
                    ))}
                    </option>
                  ))}
                </select>
              </div>
              <div className="box-form__content">
                <label>
                  <FaLocationDot className='label-icon'/>
                  &nbsp; Pick-up{" "}
                  <b>*</b>
                </label>
                <select value="" >
                  <option>Select pick up location</option>
                  <option>Kyiv</option>
                  <option>Dnipro</option>
                  <option>Kharkiv</option>
                  <option>Lviv</option>
                  <option>Odesa</option>
                </select>
              </div>

              <div className="box-form__content">
                <label>
                  <FaLocationDot className='label-icon'/>
                  &nbsp; Drop-of{" "}
                  <b>*</b>
                </label>
                <select value="">
                  <option>Select drop off location</option>
                  <option>Kyiv</option>
                  <option>Dnipro</option>
                  <option>Kharkiv</option>
                  <option>Lviv</option>
                  <option>Odesa</option>
                </select>
              </div>

              <div className="box-form__content">
                <label htmlFor="picktime">
                  <FaCalendarAlt className='label-icon'/>
                  &nbsp;  Pick-up <b>*</b>
                </label>
                <input
                  id="picktime"
                  value=""
                  onChange=""
                  type="date"
                ></input>
              </div>

              <div className="box-form__content">
                <label htmlFor="droptime">
                  <FaCalendarAlt className='label-icon'/>
                  &nbsp;Drop-of<b>*</b>
                </label>
                <input
                  id="droptime"
                  value=""
                  onChange=""
                  type="date"
                ></input>
              </div>
              <button onClick="" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookCar