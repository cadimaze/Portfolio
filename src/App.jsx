import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import About from './components/About'
import Footer from './components/Footer'
import DotGrid from './components/fx/DotGrid'
import ScrollProgress from './components/fx/ScrollProgress'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <DotGrid />
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  )
}
