from flask import Flask, request, jsonify
import pickle
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define the correct path to your model
working_dir = '/Users/tejaspatil/Desktop/HackathonWith-React/backend'
model_path = os.path.join(working_dir, 'saved_models', 'diabetes_model.sav')

# Ensure the model file exists
if not os.path.exists(model_path):
    raise FileNotFoundError(f"Model file not found at {model_path}")

# Load the machine learning model
with open(model_path, 'rb') as file:
    diabetes_model = pickle.load(file)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Extract data from the request
        data = request.json
        print("Received data:", data)

        # Convert data to float and check the values
        features = [float(data[key]) for key in [
            'Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness',
            'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age'
        ]]
        print("Features:", features)

        # Make prediction
        prediction = diabetes_model.predict([features])
        print("Prediction:", prediction)

        # Return response
        result = {
            'diagnosis': 'The person is diabetic' if prediction[0] == 1 else 'The person is not diabetic'
        }
        return jsonify(result)
    
    except Exception as e:
        print("Error:", str(e))
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
