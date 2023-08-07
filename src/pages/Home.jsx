import React from 'react'
import Main from '../components/home/Main'
import BookCar from '../components/home/BookCar'
import PlanTrip from '../components/home/PlanTrip'
import PickCar from '../components/home/PickCar'
import Banner from '../components/home/Banner'
import ChooseUs from '../components/home/ChooseUs'
import Testimonials from '../components/home/Testimonials'
import Faq from '../components/home/Faq'
import Download from '../components/home/Download'

function Home() {
  return (
    <div>
      <Main />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </div>
  )
}

export default Home