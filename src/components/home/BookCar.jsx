import {CAR_DATA} from "../CarData";
import {FaCalendarAlt, FaCar} from 'react-icons/fa';
import {FaLocationDot} from 'react-icons/fa6';
import ModalBook from "./ModalBook";
import {CgClose} from "react-icons/cg";
import { useState, useEffect } from "react";


function BookCar() {

  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState({});
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");


   // open modal when all inputs are fulfilled
   const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
      setCarType(e.target.value);
  };



  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  

  // hide Success message
  const hideSuccess = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

    // hide Error message
    const hideError = () => {
      const errorMsg = document.querySelector(".error-message");
      errorMsg.style.display = "none";
    };

  return (
    <>
      <section className='book-car'>
        <div className="container">
          <div className="content">
            <div className="book-content__box">
            <h2>Book a car</h2>

              <p className="error-message">
                All fields required!
                <span onClick={hideError}><CgClose/></span>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <span onClick={hideSuccess}><CgClose/></span>
              </p>

              <form className='box-form'>
                <div className="box-form__content">
                  <label>
                  <FaCar className='label-icon'/>
                  &nbsp;  Select Your Car Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    {CAR_DATA.flat(1).map((car) => (
                      <option key={car.id} value={car}>
                        {car.name}
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
                  <select value={pickUp} onChange={handlePick}>
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
                  <select value={dropOff} onChange={handleDrop}>
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
                    value={pickTime}
                    onChange={handlePickTime}
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
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>
                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    <ModalBook
        setModal = {setModal}
        modal = {modal}
        carType = {carType}
    />
    </> 
  )
}

export default BookCar