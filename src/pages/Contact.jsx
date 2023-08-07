import Block from '../components/Block'
import GlobalBanner from '../components/GlobalBanner'
import {FaPhoneAlt, FaEnvelopeOpenText} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr';
import {FaLocationDot } from 'react-icons/fa6'

function Contact() {
  return (
    <section className='contact-section'>
      <Block name="Contact" />
      <div className="container">
        <div className="content">
        <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="tel:+38067123456">
                <FaPhoneAlt size='17px' />&nbsp; +38(067)123-456
              </a>
              <a href="mailto:dmytro.shevchenko08@gmail.com">
                <GrMail size='17px' />&nbsp;
                dmytro.shevchenko08@gmail.com
              </a>
              <a href="/">
                <FaLocationDot size='17px' />&nbsp; Dnipro,
                Ukraine
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <FaEnvelopeOpenText/>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
        </div>
      </div>
      <GlobalBanner/>
    </section>
  )
}

export default Contact