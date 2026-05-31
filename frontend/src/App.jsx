import { useState } from "react";
import axios from "axios";
import {
  Zap,
  Cpu,
  Activity,
  DollarSign,
  BarChart3,
  Lightbulb,
  Download,
  History,
  Server,
  Layers,
  CalendarDays,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    previous_day: "1.2",
    day: "30",
    month: "5",
    year: "2026",
  });

  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const chartData =
    history.length > 0
      ? [...history].reverse().map((item, index) => ({
          name: `Run ${index + 1}`,
          usage: item.daily_kwh,
          bill: item.monthly_bill,
        }))
      : [
          { name: "Day 1", usage: 22, bill: 110 },
          { name: "Day 5", usage: 25, bill: 118 },
          { name: "Day 10", usage: 21, bill: 105 },
          { name: "Day 15", usage: 28, bill: 126 },
          { name: "Day 20", usage: 24, bill: 114 },
          { name: "Day 25", usage: 27, bill: 121 },
          { name: "Day 30", usage: 23, bill: 112 },
        ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const predictEnergy = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", {
        previous_day: Number(form.previous_day),
        day: Number(form.day),
        month: Number(form.month),
        year: Number(form.year),
      });

      const newResult = {
        ...response.data,
        prediction_date: `${form.month}/${form.day}/${form.year}`,
        created_at: new Date().toLocaleString(),
      };

      setResult(newResult);
      setHistory([newResult, ...history]);
    } catch (error) {
      console.error(error);
      alert("Prediction failed. Please make sure FastAPI backend is running.");
    }
  };

  const downloadReport = () => {
    if (!result) {
      alert("Please run a prediction first.");
      return;
    }

    const report = `
AI Smart Energy Optimization System V2 Report

Prediction Date: ${result.prediction_date}
Generated At: ${result.created_at}

Predicted Power: ${result.predicted_kw} kW
Daily Energy: ${result.daily_kwh} kWh
Monthly Energy: ${result.monthly_kwh} kWh
Estimated Monthly Bill: $${result.monthly_bill}
Energy Status: ${result.status}

AI Recommendation:
${result.recommendation}

Technology Stack:
Frontend: React + Vite
Backend: FastAPI
Machine Learning Model: Random Forest
`;

    const blob = new Blob([report], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "energy_prediction_report.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">
            <Zap size={30} />
          </div>
          <div>
            <h2>Energy AI V2</h2>
            <p>Full-Stack ML Platform</p>
          </div>
        </div>

        <div className="nav-section">
          <div className="nav-item active">
            <BarChart3 size={18} />
            Dashboard
          </div>
          <div className="nav-item">
            <Cpu size={18} />
            Prediction Model
          </div>
          <div className="nav-item">
            <Lightbulb size={18} />
            AI Insights
          </div>
          <div className="nav-item">
            <History size={18} />
            History
          </div>
        </div>

        <div className="tech-box">
          <h4>System Architecture</h4>
          <div className="tech-row">
            <Server size={17} />
            <span>FastAPI Backend</span>
          </div>
          <div className="tech-row">
            <Layers size={17} />
            <span>React Frontend</span>
          </div>
          <div className="tech-row">
            <Cpu size={17} />
            <span>Random Forest Model</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <section className="hero">
          <div>
            <span className="badge">Machine Learning • Energy Analytics • Full-Stack AI</span>
            <h1>AI Smart Energy Optimization System V2</h1>
            <p>
              A professional full-stack machine learning dashboard for energy
              consumption prediction, monthly cost estimation, and intelligent
              optimization recommendations.
            </p>
          </div>
        </section>

        <section className="metrics">
          <div className="metric-card">
            <div className="metric-icon blue"><Cpu /></div>
            <p>ML Model</p>
            <h3>Random Forest</h3>
          </div>

          <div className="metric-card">
            <div className="metric-icon green"><Activity /></div>
            <p>Energy Status</p>
            <h3>{result ? result.status : "Ready"}</h3>
          </div>

          <div className="metric-card">
            <div className="metric-icon orange"><DollarSign /></div>
            <p>Estimated Bill</p>
            <h3>{result ? `$${result.monthly_bill}` : "$0.00"}</h3>
          </div>

          <div className="metric-card">
            <div className="metric-icon purple"><BarChart3 /></div>
            <p>Monthly Usage</p>
            <h3>{result ? `${result.monthly_kwh} kWh` : "0 kWh"}</h3>
          </div>
        </section>

        <section className="grid">
          <div className="panel input-panel">
            <div className="panel-header">
              <div>
                <h2>Energy Prediction Input</h2>
                <p>Enter energy usage details to generate a prediction.</p>
              </div>
              <CalendarDays />
            </div>

            <div className="form-grid">
              <label>
                Previous Day Usage
                <input
                  type="number"
                  name="previous_day"
                  value={form.previous_day}
                  onChange={handleChange}
                />
              </label>

              <label>
                Day
                <input
                  type="number"
                  name="day"
                  value={form.day}
                  onChange={handleChange}
                />
              </label>

              <label>
                Month
                <input
                  type="number"
                  name="month"
                  value={form.month}
                  onChange={handleChange}
                />
              </label>

              <label>
                Year
                <input
                  type="number"
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button onClick={predictEnergy} className="primary-btn">
              Predict Energy Usage
            </button>

            <button onClick={downloadReport} className="secondary-btn">
              <Download size={18} />
              Download Report
            </button>
          </div>

          <div className="panel result-panel">
            <h2>Prediction Results</h2>

            {result ? (
              <div className="result-list">
                <div>
                  <span>Predicted Power</span>
                  <strong>{result.predicted_kw} kW</strong>
                </div>
                <div>
                  <span>Daily Energy</span>
                  <strong>{result.daily_kwh} kWh</strong>
                </div>
                <div>
                  <span>Monthly Energy</span>
                  <strong>{result.monthly_kwh} kWh</strong>
                </div>
                <div>
                  <span>Estimated Bill</span>
                  <strong>${result.monthly_bill}</strong>
                </div>
                <div>
                  <span>Prediction Date</span>
                  <strong>{result.prediction_date}</strong>
                </div>
              </div>
            ) : (
              <p className="empty">Run a prediction to view results.</p>
            )}
          </div>
        </section>

        <section className="grid">
          <div className="panel chart-panel">
            <h2>Energy Usage Trend</h2>
            <p className="subtext">Prediction-based usage pattern visualization.</p>

            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="usage" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="panel insight-panel">
            <div className="insight-icon">
              <Lightbulb />
            </div>
            <h2>AI Recommendation</h2>
            <p>
              {result
                ? result.recommendation
                : "Run a prediction to generate an intelligent energy optimization recommendation."}
            </p>
          </div>
        </section>

        <section className="panel history-panel">
          <div className="history-header">
            <div>
              <h2>Prediction History</h2>
              <p>Recent prediction records from the current session.</p>
            </div>
            <History />
          </div>

          {history.length > 0 ? (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Predicted kW</th>
                    <th>Monthly kWh</th>
                    <th>Bill</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {history.map((item, index) => (
                    <tr key={index}>
                      <td>{item.prediction_date}</td>
                      <td>{item.predicted_kw}</td>
                      <td>{item.monthly_kwh}</td>
                      <td>${item.monthly_bill}</td>
                      <td>
                        <span className="status-pill">{item.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="empty">No prediction history yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;