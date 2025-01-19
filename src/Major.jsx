import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Major.css';

function Major() {
  const [major, setMajor] = useState('');
  const [rotation, setRotation] = useState(0); // Track rotation angle for input panel
  const [topLogoPosition, setTopLogoPosition] = useState(0); // Track the horizontal position of the top logo
  const [topLogoRotation, setTopLogoRotation] = useState(0); // Track rotation angle for the top logo
  const [bottomLogoPosition, setBottomLogoPosition] = useState(window.innerWidth); // Start the bottom logo from the right side
  const [bottomLogoRotation, setBottomLogoRotation] = useState(0); // Track rotation angle for the bottom logo

  const [topLogo2Rotation, setTopLogo2Rotation] = useState(0);
  const [topLogo3Rotation, setTopLogo3Rotation] = useState(0);
  const [bottomLogo2Rotation, setBottomLogo2Rotation] = useState(0);
  const [bottomLogo3Rotation, setBottomLogo3Rotation] = useState(0);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setMajor(e.target.value);
    setRotation((prevRotation) => prevRotation + 90); // Increase rotation by 90 degrees
  };

  // Animation for the top and bottom logos with staggered rotation
  useEffect(() => {
    const interval = setInterval(() => {
      // Top logo moves from left to right and rotates
      setTopLogoPosition((prevPosition) => (prevPosition > window.innerWidth / 2 ? -100 : prevPosition + 8)); // Move top logo across half the screen with more speed
      setTopLogoRotation((prevRotation) => prevRotation + 5); // Slower rotation for the first top logo

      // Second top logo moves and rotates
      setTopLogo2Rotation((prevRotation) => prevRotation + 8); // Faster rotation for second top logo
      setTopLogoPosition((prevPosition) => (prevPosition > window.innerWidth / 2 ? -100 : prevPosition + 10)); // Faster speed

      // Third top logo moves and rotates
      setTopLogo3Rotation((prevRotation) => prevRotation + 10); // Even faster rotation for third top logo

      // Bottom logo moves from right to left and rotates
      setBottomLogoPosition((prevPosition) => (prevPosition < -100 ? window.innerWidth / 1.5 : prevPosition - 8)); // Move bottom logo across half the screen with more speed
      setBottomLogoRotation((prevRotation) => prevRotation + 6); // Slower rotation for bottom logo

      // Second bottom logo moves and rotates
      setBottomLogo2Rotation((prevRotation) => prevRotation + 9); // Faster rotation for second bottom logo
      setBottomLogoPosition((prevPosition) => (prevPosition < -100 ? window.innerWidth / 1.5 : prevPosition - 10)); // Faster speed

      // Third bottom logo moves and rotates
      setBottomLogo3Rotation((prevRotation) => prevRotation + 12); // Even faster rotation for third bottom logo
    }, 20); // Same interval for both logos to ensure equal speed

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Top logos */}
      <div
        className="w-full max-w-md text-center mb-6"
        style={{
          position: 'absolute',
          top: '20px',
          left: `${topLogoPosition}px`, // Move top logo from left to right
          transform: `rotate(${topLogoRotation}deg)`, // Rotate top logo
          transition: 'transform 0.1s linear', // Smooth rotation transition
        }}
      >
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Top Hero Logo 1"
          className="w-42 h-40 object-contain"
        />
      </div>
      <div
        className="w-full max-w-md text-center mb-6"
        style={{
          position: 'absolute',
          top: '70px',
          left: `${topLogoPosition + window.innerWidth / 3}px`, // Move second top logo with a larger offset
          transform: `rotate(${topLogo2Rotation}deg)`, // Rotate second top logo with staggered speed
          transition: 'transform 0.1s linear', // Smooth rotation transition
        }}
      >
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Top Hero Logo 2"
          className="w-42 h-40 object-contain"
        />
      </div>
      <div
        className="w-full max-w-md text-center mb-6"
        style={{
          position: 'absolute',
          top: '120px',
          left: `${topLogoPosition + window.innerWidth / 2.5}px`, // Move third top logo with even more offset
          transform: `rotate(${topLogo3Rotation}deg)`, // Rotate third top logo with staggered speed
          transition: 'transform 0.1s linear', // Smooth rotation transition
        }}
      >
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Top Hero Logo 3"
          className="w-42 h-40 object-contain"
        />
      </div>

      {/* Rotating input panel */}
      <div
        className="bg-white rounded-lg shadow-lg p-8 w-120 max-w-md"
        style={{
          transform: `rotate(${rotation}deg)`, // Apply rotation to input panel
          transition: 'transform 0.5s ease', // Smooth rotation transition
        }}
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          What is your Major?
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your major"
            value={major}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md bg-slate-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            onClick={() => navigate('/skills')}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Bottom logos */}
      <div
        className="w-full max-w-md text-center mt-6"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: `${bottomLogoPosition}px`, // Move bottom logo from right to left
          transform: `rotate(${bottomLogoRotation}deg)`, // Rotate bottom logo
          transition: 'transform 0.1s linear', // Smooth rotation transition
        }}
      >
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Bottom Hero Logo 1"
          className="w-42 h-40 object-contain"
        />
      </div>
      <div
        className="w-full max-w-md text-center mt-6"
        style={{
          position: 'absolute',
          bottom: '70px',
          left: `${bottomLogoPosition - window.innerWidth / 3}px`, // Move second bottom logo with a larger offset
          transform: `rotate(${bottomLogo2Rotation}deg)`, // Rotate second bottom logo with staggered speed
          transition: 'transform 0.1s linear', // Smooth rotation transition
        }}
      >
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Bottom Hero Logo 2"
          className="w-42 h-40 object-contain"
        />
      </div>
      <div
        className="w-full max-w-md text-center mt-6"
        style={{
          position: 'absolute',
          bottom: '120px',
          left: `${bottomLogoPosition - window.innerWidth / 2.5}px`, // Move third bottom logo with even more offset
          transform: `rotate(${bottomLogo3Rotation}deg)`, // Rotate third bottom logo with staggered speed
          transition: 'transform 0.1s linear', // Smooth rotation transition
        }}
      >
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Bottom Hero Logo 3"
          className="w-42 h-40 object-contain"
        />
      </div>
    </div>
  );
}

export default Major;
