import React from 'react';
import { Link } from 'react-router-dom';
import './HealthCareModelPage.css'; // Ensure this path is correct

// Import images if placed in src/assets
import house from '../assets/images/house.jpeg';
import health from '../assets/images/health.jpeg';

const HealthCareModelPage = () => {
    return (
        <div className="homepage-container">
            <div className="healthcare">
                <img src={house} alt="ML Models" className="sectionimage" />
                <h2>diabetes Models</h2>
                <p>Here is some information about our ML models. They are state-of-the-art models built to tackle various problems.</p>
                <Link to="/diabetes-models">
                    <button className="btn">Try Out</button>
                </Link>
            </div>
            <div className="healthcare">
                <img src={health} alt="Healthcare Models" className="sectionimage" />
                <h2> Hearth cancer Models</h2>
                <p>Here is some information about our healthcare models. They are designed to assist in various healthcare scenarios.</p>
                <Link to="/healthcare-models">
                    <button className="btn">Go to Healthcare Models</button>
                </Link>
            </div>
            <div className="healthcare">
                <img src={house} alt="ML Models" className="sectionimage" />
                <h2>ML Models</h2>
                <p>Here is some information about our ML models. They are state-of-the-art models built to tackle various problems.</p>
                <Link to="/ml-models">
                    <button className="btn">Go to ML Models</button>
                </Link>
            </div>
        </div>
    );
};

export default HealthCareModelPage;
