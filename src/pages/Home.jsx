import AnimatedBg from "../components/AnimatedBg"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Clients from "../components/Clients"
import Services from "../components/Services"
import Results from "../components/Results"
import Portfolio from "../components/Portfolio"
import Process from "../components/Process"
import CaseStudies from "../components/CaseStudies"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SideNav from "../components/SideNav"
import BackToTop from "../components/BackToTop"

import useGSAP from "../hooks/useGSAP"
import useMagnetic from "../hooks/useMagnetic"

function Home() {

  useGSAP()
  useMagnetic()

  return (
    <>
      <AnimatedBg />
      <Navbar />
      <SideNav />
      <main id="main-content">
        <Hero />
        <Stats />
        <Clients />
        <Services />
        <Results />
        <Portfolio />
        <Process />
        <CaseStudies />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    
    </>
  )
}


export default Home
