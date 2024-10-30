import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Qualifications from './Components/Qualifications/Qualifications'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import ScrollUp from './Components/ScrollUp/ScrollUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <main className="main">
      <Home></Home>
      <About></About> 
      <Skills></Skills>
      <Contact></Contact>
      <ScrollUp></ScrollUp>
    </main>
    </>
  )
}

export default App
