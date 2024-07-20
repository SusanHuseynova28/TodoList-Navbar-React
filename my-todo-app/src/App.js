import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/BaseCard';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
