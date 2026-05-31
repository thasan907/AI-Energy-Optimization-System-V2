from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd

app = FastAPI(
    title="AI Energy Optimization API",
    version="2.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("models/energy_model.pkl")


class EnergyInput(BaseModel):
    previous_day: float
    day: int
    month: int
    year: int


@app.get("/")
def home():
    return {"message": "AI Energy Optimization API Running"}


@app.post("/predict")
def predict_energy(data: EnergyInput):
    input_data = pd.DataFrame(
        [[data.previous_day, data.day, data.month, data.year]],
        columns=["Previous_Day", "Day", "Month", "Year"]
    )

    prediction_kw = model.predict(input_data)[0]

    daily_kwh = prediction_kw * 24
    monthly_kwh = daily_kwh * 30
    monthly_bill = monthly_kwh * 0.18

    if monthly_kwh < 600:
        status = "Efficient"
        recommendation = "Energy usage looks efficient. Continue monitoring daily consumption."
    elif monthly_kwh < 900:
        status = "Moderate"
        recommendation = "Energy usage is moderate. Monitor peak-hour consumption and standby devices."
    else:
        status = "High Usage"
        recommendation = "High usage predicted. Reduce HVAC usage and unnecessary appliance operation."

    return {
        "predicted_kw": round(float(prediction_kw), 2),
        "daily_kwh": round(float(daily_kwh), 1),
        "monthly_kwh": round(float(monthly_kwh), 0),
        "monthly_bill": round(float(monthly_bill), 2),
        "status": status,
        "recommendation": recommendation
    }