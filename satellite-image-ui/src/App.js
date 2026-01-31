import React, { useState } from "react";
import axios from "axios";
import UploadBox from "./components/UploadBox";
import ResultCard from "./components/ResultCard";
import { PREDICT_API } from "./common_utils/links"
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image.file);

    try {
      setLoading(true);
      setResult(null);

      const response = await axios.post(PREDICT_API, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(response.data);
    } catch (error) {
      alert("Prediction failed. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Satellite Image Classifier</h1>
      <p className="subtitle">Upload a satellite image to identify terrain type</p>

      <div className="card">
        <UploadBox image={image} setImage={setImage} />
        <button className="button" onClick={handlePredict} disabled={loading}>
          {loading ? "Analyzing..." : "Predict"}
        </button>

        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default App;
