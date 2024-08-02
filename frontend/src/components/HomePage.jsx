import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure this path is correct

// Import images if placed in src/assets
import house from '../assets/images/house.jpeg';
import health from '../assets/images/health.jpeg';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="section ml-models">
                <img src={house} alt="ML Models" className="section-image" />
                <h2 className="text-red-400">Price Prediction</h2>
                <p>Here is some information about our ML models. They are state-of-the-art models built to tackle various problems. Here is some information about our ML models. They are state-of Here is some information about our ML models. They are state-of Here is some information about our ML models. They are state-of</p>
                <Link to="/ml-models">
                    <button className="btn">Go to ML Models</button>
                </Link>
            </div>
            <div className="section healthcare-models">
                <img src={health} alt="Healthcare Models" className="section-image" />
                <h2>Healthcare Models</h2>
                <p> Here is some information about our ML models. They are state-of-the-art models built to tackle various problems. Here is some information about our ML models. They are state-of Here is some information about our ML models. They are state-of Here is some information about our ML models. They are state-of</p>
                <Link to="/healthcare-models">
                    <button className="btn">Go to Healthcare Models</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
