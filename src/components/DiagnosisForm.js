import React, { useState } from 'react';
import './DiagnosisForm.css';

const DiagnosisForm = ({ onFormSubmit }) => {
  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'Pregnancies', label: 'Pregnancies', type: 'number' },
    { name: 'Glucose', label: 'Glucose', type: 'number' },
    { name: 'BloodPressure', label: 'Blood Pressure', type: 'number' },
    { name: 'SkinThickness', label: 'Skin Thickness', type: 'number' },
    { name: 'Insulin', label: 'Insulin', type: 'number' },
    { name: 'BMI', label: 'BMI (Body Mass Index)', type: 'number' },
    { name: 'DiabetesPedigreeFunction', label: 'Diabetes Pedigree Function', type: 'float' },
    { name: 'Age', label: 'Age', type: 'number' },
  ];

  const initialFormData = {};
  fields.forEach(field => {
    initialFormData[field.name] = '';
  });

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const timestamp = new Date().getTime();
  
    const featuresData = {};
    for (const key in formData) {
      if (key !== 'name' && key !== 'timestamp') {
        featuresData[key] = formData[key];
      }
    }
  
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(featuresData)
      });
  
      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse && jsonResponse.prediction && jsonResponse.prediction.length === 1 && jsonResponse.prediction[0].length === 2) {
          // Extract DiabetesRisk value from the response
          const diabetesRisk = jsonResponse.prediction[0][1] * 100;
  
          // Update form data with DiabetesRisk value
          const formDataWithDiabetesRisk = { ...formData, timestamp: timestamp, DiabetesRisk: diabetesRisk };
          onFormSubmit(formDataWithDiabetesRisk);
          setSubmitted(diabetesRisk);
          setFormData(initialFormData);
        } else {
          console.error('Invalid response format:', jsonResponse);
        }
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="diagnosis-form-container"> {/* Apply CSS class */}
      <h2>Diagnosis Form</h2>
      {submitted !== null && (
        <div className="diagnosis-message">
          <p>Your record has been submitted successfully</p>
          <p>Your diabetes risk score is <strong>{submitted.toFixed(2)}</strong>%</p>
        </div>
      )}
      <form className="diagnosis-form" onSubmit={handleSubmit}> {/* Apply CSS class */}
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}:</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DiagnosisForm;
