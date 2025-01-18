import { useState } from 'react';
import './App.css';

function SchoolPage() {
  const [selected, setSelected] = useState(null); // Track the selected circle
  const [revealed, setRevealed] = useState(new Array(7).fill(false)); // Track if a circle is revealed

  const schools = ['NUS', 'NTU', 'SMU', 'SIT', 'SIM', 'SUTD', 'SUSS']; // School names

  const handleBoxClick = (index) => {
    // Reset all circles to not revealed
    const newRevealed = new Array(7).fill(false);
    
    // Set the clicked circle as revealed
    newRevealed[index] = true;
    
    setRevealed(newRevealed);
    setSelected(index);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white">
      {/* Logo Section */}
      <div className="w-full max-w-md text-center mb-16 mt-8 logo">
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Hero Logo"
          className="mx-auto w-42 h-40 object-contain mb-4"
        />
      </div>

      {/* Choose Your School Section */}
      <div className="text-center mb-8 mt-20">
        <h1 className="text-2xl font-semibold">Choose Your School</h1>
        <p className="text-gray-600">Click on a circle to select a school</p>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        {schools.map((school, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            className={`carousel-circle ${revealed[index] ? 'selected' : ''}`}
          >
            {revealed[index] ? (
              <span className="text-lg font-semibold text-gray-800">{school}</span>
            ) : (
              <span className="text-lg font-semibold text-gray-400">Select</span>
            )}
          </div>
        ))}
      </div>

      {/* Confirm Button */}
      <button
        onClick={() => alert(`School selection confirmed: ${schools[selected]}`)}
        className="mt-8 px-6 py-2 bg-blue-500 text-white text-lg rounded-lg shadow hover:bg-blue-600"
      >
        Confirm
      </button>
    </div>
  );
}

export default SchoolPage;
