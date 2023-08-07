import GlobalBanner from '../components/GlobalBanner'
import Block from '../components/Block'
import PlanTrip from '../components/home/PlanTrip'
import about from '../images/about.jpg';
import car from '../images/car.svg';
import rental from '../images/rental.svg';
import repair from '../images/repair.svg';

function About() {
  return (
    <>
    
      <section className='about-page'>
      <Block name="About" />
        <div className="container">
          <div className="content">
            <div className="about-img">
              <img src={about} alt="about-img" />
            </div>
            <div className="about-description">
              <h3>
                About Company
              </h3>
              <h2>
                You start the engine and your adventure begins
              </h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
              </p>
              <div className="statistic">
                <div className="item">
                  <span><img src={car} alt="car-img" /></span>
                  <div className="item-text">
                    <h4>20</h4>
                    <p>Car<br/>Types</p>
                  </div>
                </div>
                <div className="item">
                  <span><img src={rental} alt="rental-img" /></span>
                    <div className="item-text">
                      <h4>85</h4>
                      <p>Rental<br/>Outlets</p>
                    </div>
                </div>
                <div className="item">
                  <span><img src={repair} alt="repair-img" /></span>
                    <div className="item-text">
                      <h4>75</h4>
                      <p>Repair<br/>Shop</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PlanTrip/>
      <GlobalBanner/>
      </section>
  
    </>
  )
}

export default About