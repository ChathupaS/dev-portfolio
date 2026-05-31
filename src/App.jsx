import FloatingNav from './components/ui/FloatingNav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Competitions from './sections/Competitions'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-slate-100">
      <FloatingNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Competitions />
      <Contact />
    </div>
  )
}

export default App
