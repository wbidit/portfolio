import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import BiditRajResume from './components/BiditRajResume';
import './App.css';

function App() {
  return (
    <Router basename="/portfolio">  {/* Important for GitHub Pages */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/resume" element={<BiditRajResume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
