import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function SchoolPage() {
  const [selected, setSelected] = useState(null); // Track the selected circle
  const [revealed, setRevealed] = useState(new Array(7).fill(false)); // Track if a circle is revealed
  const [spinSpeed, setSpinSpeed] = useState(1); // Spin speed multiplier
  const navigate = useNavigate();

  const schools = ['NUS', 'NTU', 'SMU', 'SIT', 'SIM', 'SUTD', 'SUSS']; // School names

  const handleBoxClick = (index) => {
    const newRevealed = new Array(7).fill(false);
    newRevealed[index] = true;
    setRevealed(newRevealed);
    setSelected(index);
  };

  const increaseSpinSpeed = () => {
    setSpinSpeed((prev) => Math.min(prev + 0.5, 5)); // Cap speed at 5x
  };

  const decreaseSpinSpeed = () => {
    setSpinSpeed((prev) => Math.max(prev - 0.5, 0.5)); // Minimum speed is 0.5x
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white relative">
      {/* Logo Section */}
      <div className="w-full max-w-md text-center mt-8 mb-16 logo">
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Hero Logo"
          className="mx-auto w-44 h-40 object-contain"
        />
      </div>

      {/* Choose Your School Section */}
      <div className="text-center mt-10">
        <h1 className="text-2xl font-semibold text-gray-600">Choose Your School</h1>
        <p className="text-gray-600">Click on a circle to select a school</p>
      </div>

      {/* Carousel */}
      <div
        className="carousel-container"
        style={{
          animation: `spin ${10 / spinSpeed}s linear infinite`,
        }}
      >
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

      {/* Navigation Texts */}
      <div className="mt-8 text-center">
        <p
          onClick={() => navigate('/skills')}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Click here to proceed.
        </p>
        <p
          onClick={() => navigate('/birthday')}
          className="text-red-500 cursor-pointer hover:underline"
        >
          Click here to return.
        </p>
      </div>

      {/* Dummy Navigation Circles */}
      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-400"
        title="Navigate Back"
        onClick={decreaseSpinSpeed}
      >
        <span className="text-2xl text-gray-700">&larr;</span>
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-400"
        title="Navigate Forward"
        onClick={increaseSpinSpeed}
      >
        <span className="text-2xl text-gray-700">&rarr;</span>
      </div>
    </div>
  );
}

export default SchoolPage;



