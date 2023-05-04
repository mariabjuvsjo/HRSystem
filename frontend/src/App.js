import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  // Fetching message from backend on mount
  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) =>
        setMessage(data.msg));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <p>STENHUSE GÅRD</p>
      </header>
    </div>
  );
}

export default App;
