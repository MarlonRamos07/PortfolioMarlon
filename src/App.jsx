import MyNavBar from "./Components/Navbar"
import Hero from './Components/Hero'
import Sobre from './Components/About'
import Techs from './Components/Tech'
import Projects from "./Components/Projects"
import Testimonials from './Components/Testimonials'
import { AnimatePresence } from 'framer-motion'
import Social from './Components/Social'


function App() {


  return (
    <>
    
      <MyNavBar/>
      <AnimatePresence mode ="wait">
      <Hero/>
      <Sobre/>
      <Techs/>
      <Projects/>
      <Testimonials/>
      <Social/>
      </AnimatePresence>
    </>
  )
}

export default App
