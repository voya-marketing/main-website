import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Work from "./pages/Work"
import Process from "./pages/Process"
import Results from "./pages/Results"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/process" element={<Process />} />
        <Route path="/results" element={<Results />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App