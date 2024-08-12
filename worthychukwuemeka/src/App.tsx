import React from 'react';
import './App.css';
import ComingSoon from './pages/ComingSoon';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
