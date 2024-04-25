# Diabetes Diagnosis React App

The **Diabetes Diagnosis React App** is a web application designed to assist users in predicting diabetes risk based on inputted health data. The application features a user-friendly interface built with React.js, allowing users to input their health information through a form submission process. Additionally, users can view the history records of past diagnoses.

### Features

- **Form Submission**: Users can input various health metrics such as glucose levels, blood pressure, BMI, etc., through a form submission process.
  
- **Diagnosis History**: The application maintains a record of past diagnoses, allowing users to track their health trends over time.

### Machine Learning Model

The prediction of diabetes risk is powered by a machine learning model developed using Python. The model is deployed as a Flask API endpoint, enabling seamless integration with the React.js frontend. Currently, the application employs a baseline logistic regression model for prediction purposes.

### Technologies Used

- **Framework**: React.js
- **API Endpoint**: Flask (Python)
- **Machine Learning**: Python, scikit-learn

## Getting Started

To get started with the Diabetes Diagnosis React App, follow these steps:

### 1. Clone the GitHub Repository
Clone the GitHub repository to your local machine:
```bash
git clone https://github.com/Alfadhils/diabetes-diagnosis-app.git
```

### 2. Install Python Requirements
Navigate to the project directory and install the Python requirements:
```bash
pip install -r requirements.txt
```

### 3. Install JavaScript Requirements
Navigate to the project directory and install the JavaScript requirements:
```bash
npm install
```

### 4. Initialize the ML API Endpoint through Flask
Navigate back to the project directory and run the Flask API for the machine learning model:
```bash
python flask_api.py
```

### 5. Run the React App
In a separate terminal window, run the React app:
```bash
npm start
```


The Diabetes Diagnosis React App should now be running locally on your machine. Open your web browser and visit `http://localhost:3000` to access the application.