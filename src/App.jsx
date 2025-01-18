import { useState, useEffect } from 'react';
import './App.css';
import ReactConfetti from 'react-confetti';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(1); // Default country code: +1
  const [gender, setGender] = useState(''); // Gender state
  const [buttonStyle, setButtonStyle] = useState({}); // Button position state
  const [isMoving, setIsMoving] = useState(false); // Button movement state
  const [isClicked, setIsClicked] = useState(false); // Track if button is clicked
  const [confetti, setConfetti] = useState(false); // Confetti state
  const [bgColor, setBgColor] = useState('black'); // Background color state

  const increaseCode = () => {
    if (countryCode < 999) setCountryCode(countryCode + 1); // Limit to realistic codes
  };

  const decreaseCode = () => {
    if (countryCode > 1) setCountryCode(countryCode - 1); // Minimum code +1
  };

  const moveButton = () => {
    const randomX = Math.floor(Math.random() * 90); // Random position between 0% to 90% for x-axis
    const randomY = Math.floor(Math.random() * 90); // Random position between 0% to 90% for y-axis
    setButtonStyle({
      position: 'absolute',
      left: `${randomX}%`,
      top: `${randomY}%`,
      transform: 'translate(-50%, -50%)',
    });
  };

  const handleClick = () => {
    if (!isClicked) {
      // Start the movement only the first time the button is clicked
      setIsClicked(true); // Mark that the button has been clicked
      setIsMoving(true); // Start the moving animation

      // Move the button continuously for 5 seconds
      const moveInterval = setInterval(() => {
        moveButton();
      }, 500); // Every 500ms to move

      // After 5 seconds, stop the movement and return to the original position
      setTimeout(() => {
        clearInterval(moveInterval); // Stop moving
        setIsMoving(false); // Stop continuous movement
        setButtonStyle({}); // Reset to original position
      }, 5000); // 5 seconds of movement
    }
  };

  // Trigger confetti when the user clicks on an input field
  const handleInputClick = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false); // Reset after a short duration
    }, 5000); // Confetti will last 1 second
  };

  // Change background color every second
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prevColor) => (prevColor === 'black' ? 'white' : 'black'));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    if (window.confirm('Are you sure?')) {
      setGender(selectedGender);
    } else {
      setGender(''); // Reset the gender selection if not confirmed
    }
  };

  return (
    <div className={`relative flex flex-col items-center justify-start min-h-screen bg-${bgColor}`}>
      {/* Confetti Animation */}
      {confetti && <ReactConfetti />}

      <div className="w-full max-w-md text-center mb-6 mt-8">
        <img 
          src={'./src/assets/hero-logo.jpeg'} 
          alt="Hero Logo" 
          className="mx-auto w-42 h-40 object-contain mb-4"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-black text-center mb-6">
          Sign Up for the Hackathon
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onClick={handleInputClick} // Trigger confetti on click
            className="w-full px-6 py-4 border rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClick={handleInputClick} // Trigger confetti on click
            className="w-full px-6 py-4 border rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md px-6 py-4 bg-gray-700 w-1/2">
              <button
                onClick={decreaseCode}
                className="px-4 py-2 bg-gray-600 rounded-l-md text-white hover:bg-gray-500 focus:outline-none"
              >
                -
              </button>
              <span className="px-6 text-white">+{countryCode}</span>
              <button
                onClick={increaseCode}
                className="px-4 py-2 bg-gray-600 rounded-r-md text-white hover:bg-gray-500 focus:outline-none"
              >
                +
              </button>
            </div>
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onClick={handleInputClick} // Trigger confetti on click
              className="w-1/2 px-6 py-4 border rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <select
            value={gender}
            onChange={handleGenderChange}
            onClick={handleInputClick} // Trigger confetti on click
            className="w-full px-6 py-4 border rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="man">Man</option>
            <option value="woman">Woman</option>
            <option value="others">Others</option>
          </select>
          {gender === 'others' && (
            <p className="text-red-500 text-sm mt-2">
              Hope you have a great experience!
            </p>
          )}
          <button
            style={buttonStyle}
            onClick={handleClick} // Start moving when clicked
            className={`py-4 px-6 ${
              isMoving ? 'bg-red-500' : 'bg-blue-500'
            } text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
