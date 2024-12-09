import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;