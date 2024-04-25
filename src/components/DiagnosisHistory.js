import React, { useState } from 'react';
import './DiagnosisHistory.css';


const DiagnosisHistory = ({ history, setDiagnosisHistory }) => {
  const [openDiagnoses, setOpenDiagnoses] = useState([]);

  const toggleDiagnosis = (diagnosis) => {
    if (openDiagnoses.includes(diagnosis.name)) {
      setOpenDiagnoses(openDiagnoses.filter(item => item !== diagnosis.name));
    } else {
      setOpenDiagnoses([...openDiagnoses, diagnosis.name]);
    }
  };

  const deleteDiagnosis = (diagnosis) => {
    const updatedHistory = history.filter(item => item.name !== diagnosis.name);
    setDiagnosisHistory(updatedHistory);
  };

  // Sort the history array based on the timestamp in descending order
  const sortedHistory = history.slice().sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="diagnosis-history-container">
      <h2>Diagnosis History</h2>
      <div className="diagnosis-buttons">
        {sortedHistory.map((diagnosis, index) => (
          <div className="diagnosis-item" key={index}>
            <div>
              <button className="diagnosis-name" onClick={() => toggleDiagnosis(diagnosis)}>
                {diagnosis.name}
              </button>
              <button className="delete-button" onClick={() => deleteDiagnosis(diagnosis)}>Delete</button>
            </div>
            {openDiagnoses.includes(diagnosis.name) && (
              <div className="diagnosis-info">
                {Object.entries(diagnosis).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {key === 'timestamp' ? new Date(value).toLocaleString() : value}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiagnosisHistory;
