import Block from '../components/Block'
import GlobalBanner from '../components/GlobalBanner'
import Miller from '../images/Miller.png'
import Diaz from '../images/Diaz.png'
import Ross from '../images/Ross.png'
import Rivera from '../images/Rivera.png'
import Rizz from '../images/Rizz.png'
import Hunt from '../images/Hunt.png'

function Ourteam() {
  return (
    <section className='our-team'>
      <Block name="Our Team" />
      <div className="container">
        <div className="content">
          <div className="team-cards">
            <div className="card">
              <div className="card-img">
                <img src={Miller} alt="card-img" />
              </div>
              <h5>Luke Miller</h5>
              <p>Salesman</p>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Diaz} alt="card-img" />
              </div>
              <h5>Michael Diaz</h5>
              <p>Business Owner</p>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Ross} alt="card-img" />
              </div>
              <h5>Briana Ross</h5>
              <p>Photographer</p>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Rivera} alt="card-img" />
              </div>
              <h5>Lauren Rivera</h5>
              <p>Car Detailist</p>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Rizz} alt="card-img" />
              </div>
              <h5>Martin Rizz</h5>
              <p>Mechanic</p>
            </div>
            <div className="card">
              <div className="card-img">
                <img src={Hunt} alt="card-img" />
              </div>
              <h5>Caitlyn Hunt</h5>
              <p>Menager</p>
            </div>
          </div>
        </div>
      </div>
      <GlobalBanner/>
    </section>
  )
}

export default Ourteam