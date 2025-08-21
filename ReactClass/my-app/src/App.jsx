import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const checkEligibility = () => {
    if (!name || !age) {
      setMessage("⚠ Please enter both name and age.");
      return;
    }

    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum)) {
      setMessage("⚠ Please enter a valid number for age.");
      return;
    }

    if (ageNum >= 18) {
      // ✅ eligible
      setMessage(`Hi ${name}, you are eligible to vote ✅`);
    } else {
      // ❌ not eligible
      setMessage(`Hi ${name}, you are not eligible to vote ❌ (must be 18+)`);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Voting Eligibility Checker</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={checkEligibility}>Check Eligibility</button>
        {/* render message only if it exists */}
        {message && <p className="result">{message}</p>}
      </div>
    </div>
  );
}

export default App;
