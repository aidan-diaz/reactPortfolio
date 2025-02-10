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
        name: 'Tricky Trivia',
        imgSrc: 'trickyTriviaCover.png',
        altText: 'Tricky Trivia Website'
      },
      {
        name: 'Tech Talk',
        imgSrc: 'techTalkCover.png',
        altText: 'Tech Talk Website'
      },
      {
        name: 'Christmas List',
        imgSrc: 'christmasListCover.png',
        altText: 'Christmas List Website'
      }
    ]


  return (
    <div id='container' className={darkMode ? 'darkMode' : 'lightMode'}>
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      <h1>This is my portfolio</h1>
      <About />
      <Project projectInfo={portfolioPieces[0]} />
      <Project projectInfo={portfolioPieces[1]} />
      <Project projectInfo={portfolioPieces[2]} />
    </div>
  )
}

export default App
