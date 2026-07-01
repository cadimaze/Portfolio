import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import SiteLinks from "./components/SiteLinks";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Certifications/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SiteLinks/>
      <Footer/>
    </>
  )
}
