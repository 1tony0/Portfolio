import React, { useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home'
import About from './components/Home/About';
import Contact from './components/Contact';
import Tech from './components/About/Tech';
import Dev from './components/About/Dev';
import Experiences from './components/Experiences';
import Portfolio from './components/Portfolio';




function App() {
  useEffect(() => {
    document.title = 'Antonio\'s Portfolio';
  }, []);
  return (
    <>
    <Routes>
      <Route path ="/" element={<Layout />} >
        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="about/tech" element={<Tech />} />
        <Route path="contact" element={<Contact />}/>
        <Route path="about/dev" element={<Dev />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="Experiences" element={<Experiences />} />
      </Route>
    </Routes>
    </>
  )
}

export default App;

