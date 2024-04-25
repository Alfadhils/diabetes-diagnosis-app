from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

model = joblib.load('./model/logistic_regression_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    data_df = pd.DataFrame(data, index=[0])
    prediction = model.predict_proba(data_df)
    result = {
        'prediction' : prediction.tolist( )
    }
    
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
