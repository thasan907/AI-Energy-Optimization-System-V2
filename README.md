# AI Energy Optimization System V2

## Overview

AI Energy Optimization System V2 is a full-stack machine learning application designed to predict household energy consumption, estimate monthly electricity costs, and provide intelligent energy-saving recommendations through an interactive dashboard.

The project integrates a React frontend, FastAPI backend, and a trained Random Forest machine learning model to demonstrate real-world energy analytics and optimization.

---

## Key Features

### Machine Learning-Based Energy Forecasting

* Predict household energy consumption using a trained Random Forest model.
* Generate estimated daily and monthly energy usage.

### Electricity Cost Estimation

* Calculate projected monthly electricity costs based on predicted consumption.

### AI Recommendation Engine

* Provide intelligent recommendations for reducing energy usage and improving efficiency.

### Interactive Dashboard

* Modern React-based user interface.
* Real-time prediction results.
* Energy trend visualization.
* Responsive design for different screen sizes.

### Prediction History

* Store and display prediction records during application runtime.
* Compare previous predictions and energy trends.

### Downloadable Reports

* Export prediction results and recommendations into a downloadable report.

---

## Dashboard Preview

### Main Dashboard

![Dashboard](docs/screenshots/dashboard-home.png)

### Prediction Results

![Prediction Results](docs/screenshots/prediction-result.png)

### AI Recommendation Panel

![Recommendation](docs/screenshots/recommendation-panel.png)

---

## Technology Stack

### Frontend

* React
* Vite
* Axios
* Recharts
* Lucide React

### Backend

* FastAPI
* Python
* Uvicorn

### Machine Learning

* Scikit-Learn
* Random Forest Regressor
* Pandas
* NumPy
* Joblib

### Version Control

* Git
* GitHub

---

## System Architecture

User Input

↓

React Frontend

↓

FastAPI Backend

↓

Random Forest Machine Learning Model

↓

Prediction Results

↓

Interactive Dashboard Visualization

---

## Project Structure

```text
AI-Energy-Optimization-System-V2
│
├── backend
│   ├── main.py
│   ├── requirements.txt
│   └── models
│       └── energy_model.pkl
│
├── frontend
│   ├── src
│   ├── package.json
│   └── vite.config.js
│
├── docs
│   └── screenshots
│
├── README.md
└── .gitignore
```

## Example Prediction Output

### Input

```json
{
  "previous_day": 1.2,
  "day": 30,
  "month": 5,
  "year": 2026
}
```

### Output

```json
{
  "predicted_kw": 0.95,
  "daily_kwh": 22.9,
  "monthly_kwh": 687,
  "monthly_bill": 123.67,
  "status": "Moderate",
  "recommendation": "Monitor peak-hour usage and reduce standby power consumption."
}
```

---

## Skills Demonstrated

* Machine Learning Model Deployment
* Full-Stack Development
* REST API Development
* Frontend–Backend Integration
* Data Visualization
* Energy Analytics
* Python Programming
* React Development
* Software Engineering Practices
* Git and GitHub Workflow

---

## Future Enhancements

### Version 3 Roadmap

* Smart Meter Dataset Integration
* Real-Time Energy Monitoring
* Advanced Forecasting Models
* Energy Risk Assessment
* Savings Optimization Engine
* User Authentication
* Database Integration
* Cloud Deployment

---

## Author

**Toufique Hasan**

M.S. Applied Computer Science

Southeast Missouri State University

---

## License

This project is developed for educational, research, and portfolio purposes.
