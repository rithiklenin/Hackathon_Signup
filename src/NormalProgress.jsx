import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

import './NormalProgress.css';

function NormalProgress() {
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const incrementDuration = 50;
    const steps = duration / incrementDuration;

    const updateProgress = () => {
      if (start < 100) {
        start += 100 / steps;
        setProgress(Math.min(start, 100));
      }
    };

    const interval = setInterval(updateProgress, incrementDuration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => navigate('/confirm'), 500);
    }
  }, [progress, navigate]);

  return (
    <div className="loader-container">
      <h1>Loading...</h1>
      <div className="loader">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loading-text">{Math.round(progress)}%</div>
    </div>
  );
}

export default NormalProgress;
