import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './SlowProgress.css';

function SlowProgress() {
  const [progress, setProgress] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    let start = 0;
    const duration = 20000; // Total duration for the progress to reach 100% (15 seconds)
    const incrementDuration = 50; // Time interval for each progress increment (in ms)
    const steps = duration / incrementDuration;

    const updateProgress = () => {
      if (start < 100) {
        start += 100 / steps; // Increment progress value gradually
        setProgress(Math.min(start, 100)); // Ensure it doesn't go above 100
      }
    };

    const interval = setInterval(updateProgress, incrementDuration); // Update every 'incrementDuration'

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Navigate to the "Confirm" page when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      navigate('/confirm'); // Navigate to the Confirm page
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

export default SlowProgress;
