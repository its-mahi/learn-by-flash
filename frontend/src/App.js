import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Admin from './pages/Admin';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FlashcardList from './components/FlashcardList';

const App = () => {
  return (
    <>
        <Router>
        <div className="app">

            {/* Navigation Buttons */}
            <div className="nav-buttons">
                <Link to="/">View Flashcards</Link>
                <Link to="/admin">Admin Dashboard</Link>
            </div>
            
            <h1 className="flashcard-heading">Welcome to The Flashcard Learning Tool</h1>

            {/* Viewer | Admin Routes */}
            <Routes>
            <Route path="/" element={<FlashcardList />} />
            <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    </Router>
    </>
  );
};

export default App;
