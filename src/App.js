import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import DiagnosisForm from './components/DiagnosisForm';
import DiagnosisHistory from './components/DiagnosisHistory';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('diagnosis');
  const [diagnosisHistory, setDiagnosisHistory] = useState([]);
  

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleFormSubmit = (formData) => {
    setDiagnosisHistory([...diagnosisHistory, formData]);
  };

  return (
    <div>
      <NavigationBar onSelectOption={handleSelectOption} />
      <div>
        {selectedOption === 'diagnosis' && <DiagnosisForm onFormSubmit={handleFormSubmit} />}
        {selectedOption === 'history' && <DiagnosisHistory history={diagnosisHistory} setDiagnosisHistory={setDiagnosisHistory} />}
      </div>
    </div>
  );
};

export default App;