import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div className="result-card">
      <h3>Prediction Result</h3>
      <p><strong>Class:</strong> {result.predicted_class}</p>
      <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>

      <div className="confidence-bar">
        <div
          className="confidence-fill"
          style={{ width: `${result.confidence * 100}%` }}
        />
      </div>
    </div>
  );
};

export default ResultCard;
