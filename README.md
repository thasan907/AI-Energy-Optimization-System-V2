# AI Energy Optimization System V2

## Overview

AI Energy Optimization System V2 is a full-stack machine learning application developed to predict household energy consumption, estimate electricity costs, and provide intelligent energy-saving recommendations through an interactive dashboard.

The system combines a React frontend, FastAPI backend, and a trained Random Forest machine learning model to demonstrate real-world energy analytics and optimization. The project showcases the integration of machine learning with modern web technologies to deliver actionable insights for energy management.

---

## Dashboard Preview

### Main Dashboard

![Dashboard](frontend/docs/screenshots/Dashboard%20Home.png.png)

![Prediction](frontend/docs/screenshots/Prediction%20Result.png)

![Recommendation](frontend/docs/screenshots/Recommendation%20Panel.png)
## Key Features

### Machine Learning-Based Energy Forecasting

* Predict household energy consumption using a trained Random Forest model.
* Generate estimated daily and monthly energy usage.
* Deliver real-time prediction results through a FastAPI REST API.

### Electricity Cost Estimation

* Estimate monthly electricity bills based on predicted energy consumption.
* Convert technical predictions into practical financial insights.

### AI Recommendation Engine

* Generate intelligent energy-saving recommendations.
* Classify energy usage as Efficient, Moderate, or High Usage.

### Interactive Dashboard

* Modern React-based user interface.
* Real-time energy prediction results.
* Interactive energy trend visualization.
* Responsive design for different screen sizes.

### Energy Analytics

* Display predicted power consumption.
* Visualize monthly energy usage.
* Present cost estimation and optimization recommendations.

---

## Technology Stack

### Frontend

* React
* Vite
* Axios
* Recharts
* Lucide React
* CSS

### Backend

* Python
* FastAPI
* Uvicorn
* Joblib

### Machine Learning

* Scikit-Learn
* Random Forest Regressor
* Pandas
* NumPy

### Development Tools

* Git
* GitHub
* VS Code

---

## System Architecture

```text
User Input
    ↓
React Frontend
    ↓
FastAPI Backend
    ↓
Random Forest ML Model
    ↓
Prediction Results
    ↓
Interactive Dashboard
```

---

## Project Structure

```text
AI-Energy-Optimization-System-V2
│
├── backend
│   ├── main.py
│   ├── .gitignore
│   └── models
│       └── energy_model.pkl
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│   ├── dashboard.png
│   ├── prediction.png
│   └── recommendation.png
│
└── README.md
```

---

## API Example

### Endpoint

```http
POST /predict
```

### Sample Input

```json
{
  "previous_day": 1.2,
  "day": 30,
  "month": 5,
  "year": 2026
}
```

### Sample Output

```json
{
  "predicted_kw": 0.95,
  "daily_kwh": 22.9,
  "monthly_kwh": 687,
  "monthly_bill": 123.67,
  "status": "Moderate",
  "recommendation": "Energy usage is moderate. Monitor peak-hour consumption and standby devices."
}
```

---

## How to Run Locally

### Start Backend

```bash
cd backend
uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

API Documentation:

```text
http://127.0.0.1:8000/docs
```

### Start Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

or

```text
http://localhost:5174
```

---

## Key Achievements

* Built a complete full-stack machine learning application.
* Developed a FastAPI REST API for ML inference.
* Integrated React frontend with Python backend.
* Implemented Random Forest-based energy prediction.
* Added electricity cost estimation and recommendation generation.
* Created an interactive analytics dashboard for energy monitoring.
* Applied Git and GitHub best practices for project management.

---

## Skills Demonstrated

* Machine Learning Deployment
* Full-Stack Development
* REST API Development
* Data Visualization
* React Development
* FastAPI Development
* Energy Analytics
* Python Programming
* Git & GitHub Workflow
* Software Engineering

---

## Author

**Toufique Hasan**

M.S. Applied Computer Science
Southeast Missouri State University

GitHub: https://github.com/thasan907

---

## License

This project is developed for educational, research, and portfolio purposes.
