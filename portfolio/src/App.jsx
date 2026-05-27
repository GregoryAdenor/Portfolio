import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from './composant/header';
import { Home }   from './composant/home';
import { Skills } from './composant/skills';
import { Projects } from './composant/projects';  
import { Contact } from './composant/contact';

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </Router>
    </>
  )
}

export default App
