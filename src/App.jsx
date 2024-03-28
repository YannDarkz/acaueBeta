import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/layouts/header'
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Project from './components/pages/ProjectSingle';
import SocialMedia from './components/layouts/socialMedia';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/portfolio" element={<Portfolio />} />
        <Route  path="/project/:id" element={<Project />} />
      </Routes>
      <SocialMedia />
    </Router>
  )
}

export default App
