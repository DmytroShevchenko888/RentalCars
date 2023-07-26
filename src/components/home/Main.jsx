import React from 'react'
import porshe from '../../images/porsche-911-carrera.png'


function Main() {
  return (
    <section className="main-section">
      <div className="container">
        <div className="content">
          <div className="text-section">
            <h1>Looking to <span>save more</span> on your rental car ?</h1>
            <p>Discover RentalX car rental options in USA with Rent a Car Select from a range of car options and local specials.</p>
            <div className="text-section__buttons">
              <button className='button-red'><div>Book Ride ✔</div></button>
              <button className='button-gray'><div>Lern More ▶</div></button>
            </div>           
          </div>
          <div className="picture-section">
            <h1>Porsche 911</h1>
            <p>
              The eighth generation of the iconic Porsche 911 is now faster, more emotional, and more connected than ever before. Reflecting Porsche’s unmistakable design DNA, a more muscular look and bespoke interior layout make the 911 both timeless and modern. 
            </p>
            <img src={porshe} alt="porshe" />
            <table>
              <thead>
                <tr className='table-item'>
                    <th>Year</th>
                    <th>Vehicle segment</th>
                    <th>Engine</th>
                    <th>Top Speed</th>
                    <th>0-100km/h</th>
                  </tr>
              </thead>
              <tbody>
                <tr className='table-content'>
                  <td>2018</td>
                  <td>Sport</td>
                  <td>4.0 V6</td>
                  <td>308 km/h</td>
                  <td>3.7 s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main