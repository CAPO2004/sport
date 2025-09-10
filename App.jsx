import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import HowToParticipate from './components/HowToParticipate'
import SportsCategories from './components/SportsCategories'
import Awards from './components/Awards'
import Voting from './components/Voting'
import News from './components/News'
import Gallery from './components/Gallery'
import Results from './components/Results'
import ParticipantDashboard from './components/ParticipantDashboard'
import RegistrationConfirmation from './components/RegistrationConfirmation'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white arabic-font">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/participate" element={<HowToParticipate />} />
          <Route path="/sports" element={<SportsCategories />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/results" element={<Results />} />
          <Route path="/dashboard" element={<ParticipantDashboard />} />
          <Route path="/confirmation" element={<RegistrationConfirmation />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

