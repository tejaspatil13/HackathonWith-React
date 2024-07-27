import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MLModelPage from './components/MLModelPage';
import HealthCareModelPage from './components/HealthCareModelPage';
import DiabetesModelPage from './components/DiabetesModelPage';
import './components/NavBar';
import NavBar from './components/NavBar';
const App = () => {
    return (
        <Router>
          <NavBar/>
           <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ml-models" element={<MLModelPage />} />
                <Route path="/healthcare-models" element={<HealthCareModelPage />} />
                <Route path="/diabetes-models" element={<DiabetesModelPage/>} />
            </Routes>
        </Router>
    );
};

export default App;
