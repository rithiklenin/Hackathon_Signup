import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';

function Birthday() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const generateRandomDay = () => Math.floor(Math.random() * 28) + 1;
  const generateRandomMonth = () => Math.floor(Math.random() * 12) + 1;
  const generateRandomYear = () =>
    Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900;

  const playSound = () => {
    const audio = new Audio(
      'https://actions.google.com/sounds/v1/cartoon/concussive_hit_guitar_boing.ogg'
    );
    audio.play().catch((error) => {
      console.error('Error playing sound:', error);
    });
  };

  const triggerConfetti = () => {
    if (!showConfetti) {
      setShowConfetti(true);
      playSound();
      changeBackgroundColor();
    }
  };

  const changeBackgroundColor = () => {
    const colors = [
      '#ff7b7b',
      '#ffb366',
      '#ffea75',
      '#a8ff7a',
      '#7affb6',
      '#7abfff',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  };

  const handleDayClick = () => {
    setDay(generateRandomDay());
    triggerConfetti();
  };

  const handleMonthClick = () => {
    setMonth(generateRandomMonth());
    triggerConfetti();
  };

  const handleYearClick = () => {
    setYear(generateRandomYear());
    triggerConfetti();
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  useEffect(() => {
    const toggleButtonState = setInterval(() => {
      setIsButtonDisabled((prev) => !prev);
    }, 1000); // Toggle every second

    return () => clearInterval(toggleButtonState);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full"
      style={{ backgroundColor }}
    >
      {showConfetti && <Confetti gravity={0.3} numberOfPieces={200} />}
      <div className="w-full max-w-md text-center mb-6">
        <img
          src={'/hero-logo-roll.svg'}
          alt="Hero Logo"
          className="mx-auto w-32 h-32 object-contain mb-4"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 animate-bounce">
          Choose Your Birthday
        </h1>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Day"
              value={day}
              readOnly
              onClick={handleDayClick}
              className="w-1/3 px-4 py-2 border rounded-md bg-slate-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-pointer animate-pulse"
            />
            <input
              type="text"
              placeholder="Month"
              value={month}
              readOnly
              onClick={handleMonthClick}
              className="w-1/3 px-4 py-2 border rounded-md bg-slate-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-pointer animate-pulse"
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              readOnly
              onClick={handleYearClick}
              className="w-1/3 px-4 py-2 border rounded-md bg-slate-50 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none cursor-pointer animate-pulse"
            />
          </div>
          <div className="flex justify-between gap-4">
            <button
              onClick={() => navigate('/school')}
              disabled={isButtonDisabled}
              className={`w-1/2 py-2 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 ${
                isButtonDisabled
                  ? 'bg-gray-300 cursor-not-allowed animate-pulse'
                  : 'bg-gray-500 hover:bg-gray-600'
              }`}
            >
              Back
            </button>
            <button
              onClick={() => navigate('/')}
              disabled={isButtonDisabled}
              className={`w-1/2 py-2 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ${
                isButtonDisabled
                  ? 'bg-blue-300 cursor-not-allowed animate-pulse'
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Birthday;
