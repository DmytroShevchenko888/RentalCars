import React from 'react'
import {BiLogoPlayStore,BiLogoApple} from 'react-icons/bi';
import phone from '../../images/phone.png';

function Download() {
  return (
    <section className='download-section'>
      <div className="container">
        <div className="content">
          <div className="download-box">
            <div className="phone-img">
              <img src={phone} alt="phone-img" />
            </div>
            <div className="box-content">
              <h2>Download the free Rental<span>Cars</span> app</h2>
              <p>for faster, easier booking and exclusive deals.</p>
              <div className="download-btns">
                <div className="btn-google">
                  <div className="download-icon"><BiLogoPlayStore className='icon'/></div>
                  <span class="texts">
                    <span class="text-1">GET IT ON</span>
                    <span class="text-2">Google Play</span>
                  </span>
                </div>
                <div className="btn-apple">
                  <div className="download-icon"><BiLogoApple className='icon'/></div>
                  <span class="texts">
                    <span class="text-1">GET IT ON</span>
                    <span class="text-2">Apple Store</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download