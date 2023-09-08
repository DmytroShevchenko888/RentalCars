import { useState } from "react";
import {FaTimes} from 'react-icons/fa'
import {ImInfo} from 'react-icons/im'
import { FaLocationDot} from "react-icons/fa6";
import { FaCalendarAlt} from "react-icons/fa";


function ModalBook({ modal, setModal, carAdd, dataValues, confirmBooking }) {

    // modal infos
    const [formValue, setFormValue] = useState({
      name: "",
      lastName: "",
      phone: "",
      age: "",
      email: "",
      address: "",
      city: "",
      zipcode: "",
    });

    const handleFormValue = (e) => {
      const { name, value } = e.target;

      setFormValue({
        ...formValue,
      [name]: value,
      });
    };

    if (carAdd === null) {
      return <></>;
    }

  return (
    <div
      className={modal ? "modal-book active" : "modal-book"}
      onClick={() => setModal(false)}
    >
      <div className="container">
        <div
          className={modal ? "content content-active" : "content"}
          onClick={(e) => e.stopPropagation()}
        >
          {/* title */}
        <div className="title">
          <h2>Complete Reservation</h2>
          <span onClick={() => setModal(false)}><FaTimes/></span>
        </div>
        {/* messege */}
        <div className="message">
          <h4>
            <span><ImInfo/></span> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="car-info">
          <div className="dates-div">
            <div className="car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <span><FaLocationDot/></span>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {dataValues.pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="car-info__dates">
              <span>
                <span><FaLocationDot/></span>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dataValues.dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="car-info__dates">
              <span>
                <span><FaCalendarAlt/></span>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{dataValues.pickUp}</p>
                </div>
              </span>
            </div>

            <div className="car-info__dates">
              <span>
                <span><FaCalendarAlt/></span>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dataValues.dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="model-car">
            <h5>
              <span>Car -</span> {carAdd[0].name}
            </h5>
            <div className="car-box">
              <img src={carAdd[0].img} alt="car_img" />
            </div>
          </div>
        </div>
               {/* personal info */}
               <div className="person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  name="name"
                  value={formValue.name}
                  onChange={handleFormValue}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                name="lastName"
                  value={formValue.lastName}
                  onChange={handleFormValue}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  name="phone"
                  value={formValue.phone}
                  onChange={handleFormValue}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  name="age"
                  value={formValue.age}
                  onChange={handleFormValue}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  name="email"
                  value={formValue.email}
                  onChange={handleFormValue}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  name="address"
                  value={formValue.address}
                  onChange={handleFormValue}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  name="city"
                  value={formValue.city}
                  onChange={handleFormValue}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  name="zipcode"
                  value={formValue.zipcode}
                  onChange={handleFormValue}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ModalBook;
