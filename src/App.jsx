import MyNavBar from "./Components/Navbar"
import Hero from './Components/Hero'
import Sobre from './Components/About'
import { AnimatePresence } from 'framer-motion'


function App() {


  return (
    <>
    
      <MyNavBar/>
      <AnimatePresence mode ="wait">
      <Hero/>
      <Sobre/>
      </AnimatePresence>
    </>
  )
}

export default App
