import { useState } from 'react'
import './css/App.css'
import { Header } from './components/Header.jsx'
import { Intro } from './components/Intro.jsx'
import { About } from './components/About.jsx'
import { Project } from './components/Project.jsx'
import { Footer } from './components/Footer.jsx'

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
        altText: 'Tricky Trivia Website',
        link: 'https://trickytrivia.netlify.app/videogames'
      },
      {
        name: 'Tech Talk',
        imgSrc: 'techTalkCover.png',
        altText: 'Tech Talk Website',
        link: 'https://techtalk-w57j.onrender.com/'
      },
      {
        name: 'Christmas List',
        imgSrc: 'christmasListCover.png',
        altText: 'Christmas List Website',
        link: 'https://christmaslist-1wf8.onrender.com/'
      }
    ]


  return (
    <div id='container' className={darkMode ? 'darkMode' : 'lightMode'}>
      <Header darkMode={darkMode} toggleMode={toggleMode} />
      <Intro />
      <h2 className='projectsSectionHeader'>Please Take a Look at my Past Work!</h2>
      <section className='allProjectsContainer'>
        <Project projectInfo={portfolioPieces[0]} />
        <Project projectInfo={portfolioPieces[1]} />
        <Project projectInfo={portfolioPieces[2]} />
      </section>
      <About />
      <Footer />
    </div>
  )
}

export default App
