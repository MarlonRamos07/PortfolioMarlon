import MyNavBar from "./Components/Navbar"
import Hero from './Components/Hero'
import Sobre from './Components/About'
import Techs from './Components/Tech'
import Projects from "./Components/Projects"
import Testimonials from './Components/Testimonials'
import { AnimatePresence } from 'framer-motion'
import Social from './Components/Social'
import Form from './Components/Form'
import Whats from './Components/WhatsCall'
import ScrollToTopButton from './Components/ScrollToTopButton'

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
      <Form/>
      <Whats/>
      </AnimatePresence>
      <ScrollToTopButton/>
    </>
  )
}

export default App
