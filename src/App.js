import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import React Router
import HomePage from './components/HomePage.jsx';  // Your HomePage component
import BiditRajResume from './components/BiditRajResume';  // Your Resume component
import './App.css';

function App() {
  return (
    <Router>  {/* Wrap your components in Router */}
      <div className="App">
        <Routes>
          {/* Define routes for homepage and resume page */}
          <Route path="/" element={<HomePage />} />  {/* Homepage route */}
          <Route path="/resume" element={<BiditRajResume />} />  {/* Resume page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
