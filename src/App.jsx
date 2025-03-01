import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Home />
      <About />
      <Footer/>
    </div>

  )
}

export default App; 