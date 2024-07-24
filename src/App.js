import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
  return (
    <Router basename="/Portfolio/">
      <Routes>
        <Route path="/Home" element={<Landing />} />
        <Route path="/" element={<Navigate to="/Home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
