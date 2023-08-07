import { Route, Routes } from 'react-router-dom'
import './styles/styles.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import CarModels from './pages/CarModels'
import Testimonials from './pages/Testimonials'
import OurTeam from './pages/Ourteam'
import Contact from './pages/Contact'

function App() {


  return (
    <>
      <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="models" element={<CarModels />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="team" element={<OurTeam />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
