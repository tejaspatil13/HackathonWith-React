// src/components/DiabetesModelPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './DiabetesModelPage.css';

const DiabetesModelPage = () => {
    const [formData, setFormData] = useState({
        Pregnancies: '',
        Glucose: '',
        BloodPressure: '',
        SkinThickness: '',
        Insulin: '',
        BMI: '',
        DiabetesPedigreeFunction: '',
        Age: ''
    });

    const [diagnosis, setDiagnosis] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData);
            setDiagnosis(response.data.diagnosis);
        } catch (error) {
            console.error('Error making prediction request:', error);
        }
    };

    return (
        <div className="form-container">
            <h1>Diabetes Prediction using ML</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key) => (
                    <div className="form-group" key={key}>
                        <label>{key}</label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit" className="btn">Diabetes Test Result</button>
            </form>
            {diagnosis && <h2>{diagnosis}</h2>}
        </div>
    );
};

export default DiabetesModelPage;
