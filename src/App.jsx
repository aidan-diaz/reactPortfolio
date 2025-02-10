import { useState } from 'react'
import './css/App.css'
import { Header } from './components/Header.jsx'
import { About } from './components/About.jsx'
import { Project } from './components/Project.jsx'

function App() {
  const [count, setCount] = useState(false)



  return (
    <>
      <Header />
      <h1>This is my portfolio</h1>
      <About />
      <Project />
      <Project />
      <Project />
    </>
  )
}

export default App
