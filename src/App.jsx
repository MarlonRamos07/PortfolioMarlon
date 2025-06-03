import MyNavBar from "./Components/Navbar"
import Hero from './Components/Hero'
import Sobre from './Components/About'
import Techs from './Components/Tech'
import { AnimatePresence } from 'framer-motion'


function App() {


  return (
    <>
    
      <MyNavBar/>
      <AnimatePresence mode ="wait">
      <Hero/>
      <Sobre/>
      <Techs/>
      </AnimatePresence>
    </>
  )
}

export default App
