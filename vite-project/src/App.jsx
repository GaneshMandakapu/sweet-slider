
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'

function App() {

  return (
    <>
     <ScrollProgress />
     <Navbar />
     <Hero />
     <Menu />
     <About />
     <Contact />
     <ScrollToTop />
    </>
  )
}

export default App
