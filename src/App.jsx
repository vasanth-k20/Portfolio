import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import About from './components/About'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Footer/>
    </div>

  )
}

export default App; 