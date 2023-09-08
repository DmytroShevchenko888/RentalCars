import { CAR_DATA } from "../CarData";
import { FaCalendarAlt, FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ModalBook from "./ModalBook";
import { CgClose } from "react-icons/cg";
import { useState, useEffect } from "react";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carAdd, setCarAdd] = useState(null);
  const [dataValues, setDataValues] = useState({
    carType: "",
    pickUp: "",
    dropOff: "",
    pickTime: "",
    dropTime: "",
  });



  // taking value of booking inputs
  const handleAddValue = (e) => {
    const { name, value } = e.target;
    setDataValues({
      ...dataValues,
      [name]: value,
    });

    if(name === "carType")
    setCarAdd(CAR_DATA.flat(1).filter((item) => item.id === +value));
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      dataValues.pickUp === "" ||
      dataValues.dropOff === "" ||
      dataValues.pickTime === "" ||
      dataValues.dropTime === "" ||
      dataValues.carType === ""
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
      <section className="book-car">
        <div className="container">
          <div className="content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required!
                <span onClick={hideError}>
                  <CgClose />
                </span>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <span onClick={hideSuccess}>
                  <CgClose />
                </span>
              </p>

              <form className="box-form">
                <div className="box-form__content">
                  <label>
                    <FaCar className="label-icon" />
                    &nbsp; Select Your Car Type <b>*</b>
                  </label>
                  <select
                    value={dataValues.carType}
                    name="carType"
                    onChange={handleAddValue}
                  >
                    <option>Select your car type</option>
                    {CAR_DATA.flat(1).map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="box-form__content">
                  <label>
                    <FaLocationDot className="label-icon" />
                    &nbsp; Pick-up <b>*</b>
                  </label>
                  <select
                    value={dataValues.pickUp}
                    name="pickUp"
                    onChange={handleAddValue}
                  >
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
                    <FaLocationDot className="label-icon" />
                    &nbsp; Drop-of <b>*</b>
                  </label>
                  <select
                    value={dataValues.dropOff}
                    name="dropOff"
                    onChange={handleAddValue}
                  >
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
                    <FaCalendarAlt className="label-icon" />
                    &nbsp; Pick-up <b>*</b>
                  </label>
                  <input
                    id="pickTime"
                    name="pickTime"
                    value={dataValues.pickTime}
                    onChange={handleAddValue}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__content">
                  <label htmlFor="droptime">
                    <FaCalendarAlt className="label-icon" />
                    &nbsp;Drop-of<b>*</b>
                  </label>
                  <input
                    id="dropTime"
                    name="dropTime"
                    value={dataValues.dropTime}
                    onChange={handleAddValue}
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
      <ModalBook setModal={setModal}
      modal={modal}
      carAdd={carAdd}
      dataValues={dataValues}
      confirmBooking={confirmBooking}
      />
    </>
  );
}

export default BookCar;
