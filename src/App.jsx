import { Route, Routes } from 'react-router-dom'
import './styles/styles.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Car_Models from './pages/Car_Models'
import Testimonials from './pages/Testimonials'
import Our_Team from './pages/Our_Team'
import Contact from './pages/Contact'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Car_Models />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="team" element={<Our_Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
