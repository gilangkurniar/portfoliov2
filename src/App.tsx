import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#F7AB0A]/80'>
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <Contact />
        </section>

      </div>
    </>
  )
}

export default App
