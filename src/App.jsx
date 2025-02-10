import { useState } from 'react'
import './css/App.css'
import { Header } from './components/Header.jsx'
import { About } from './components/About.jsx'
import { Project } from './components/Project.jsx'

function App() {

  const [darkMode, setMode] = useState(false)

  const toggleMode = () => {
      setMode(!darkMode)
  }

  const portfolioPieces =
    [
      {
        name: 'Project One'
      },
      {
        name: 'Project Two'
      },
      {
        name: 'Project Three'
      }
    ]


  return (
    <div id='container' className={darkMode ? 'darkMode' : 'lightMode'}>
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      <h1>This is my portfolio</h1>
      <About />
      <Project portfolioPiece={portfolioPieces[0]} />
      <Project portfolioPiece={portfolioPieces[1]} />
      <Project portfolioPiece={portfolioPieces[2]} />
    </div>
  )
}

export default App
