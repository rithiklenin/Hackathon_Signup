import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';
import ReactConfetti from 'react-confetti';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState(1);
  const [gender, setGender] = useState('');
  const [buttonStyle, setButtonStyle] = useState({});
  const [isMoving, setIsMoving] = useState(false);
  // const [isClicked, setIsClicked] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [bgColor, setBgColor] = useState('black');
  const [transitioning, setTransitioning] = useState(false); // Track transition state
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleTransition = () => {
    setTransitioning(true); // Start the transition effect
    setTimeout(() => {
      navigate('/birthday'); // Navigate after the transition
    }, 1000); // Delay to allow the transition effect
  };

  const increaseCode = () => {
    if (countryCode < 999) setCountryCode(countryCode + 1);
  };

  const decreaseCode = () => {
    if (countryCode > 1) setCountryCode(countryCode - 1);
  };

  // const moveButton = () => {
  //   const randomX = Math.floor(Math.random() * 90);
  //   const randomY = Math.floor(Math.random() * 90);
  //   setButtonStyle({
  //     position: 'absolute',
  //     left: `${randomX}%`,
  //     top: `${randomY}%`,
  //     transform: 'translate(-50%, -50%)',
  //   });
  // };

  // const handleClick = () => {
  //   if (!isClicked) {
  //     setIsClicked(true);
  //     setIsMoving(true);

  //     const moveInterval = setInterval(() => {
  //       moveButton();
  //     }, 500);

  //     setTimeout(() => {
  //       clearInterval(moveInterval);
  //       setIsMoving(false);
  //       setButtonStyle({});
  //     }, 5000);
  //   }
  // };

  const handleInputClick = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 5000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prevColor) => (prevColor === 'black' ? 'white' : 'black'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    if (window.confirm('Are you sure?')) {
      setGender(selectedGender);
    } else {
      setGender('');
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-start min-h-screen bg-${bgColor} ${
        transitioning ? 'fade-out' : ''
      }`} // Add transition class if transitioning
    >
      {confetti && <ReactConfetti />}
      <div className="w-full max-w-md text-center mb-6 mt-8">
        <img
          src={'/hero-logo-roll.svg'}
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
            onClick={handleInputClick}
            className="w-full px-6 py-4 border rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onClick={handleInputClick}
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
              onClick={handleInputClick}
              className="w-1/2 px-6 py-4 border rounded-md text-white bg-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <select
            value={gender}
            onChange={handleGenderChange}
            onClick={handleInputClick}
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
            onClick={handleTransition} // Trigger navigation
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
