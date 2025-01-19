import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Interest.css';

function Interest() {
  const [interest, setInterest] = useState('');
  const [emojis, setEmojis] = useState([]); // State to store the crying emojis

  const navigate = useNavigate();

  useEffect(() => {
    // Wait 3 seconds before starting emoji generation
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        const randomTop = Math.floor(Math.random() * window.innerHeight); // Random top position
        const randomLeft = Math.floor(Math.random() * window.innerWidth); // Random left position

        setEmojis((prevEmojis) => [
          ...prevEmojis,
          <img
            key={Date.now() + Math.random()} // Ensure a unique key
            src="https://em-content.zobj.net/thumbs/120/apple/325/crying-face_1f622.png"
            alt="Crying Emoji"
            className="w-10 h-10 absolute"
            style={{
              top: `${randomTop}px`,
              left: `${randomLeft}px`,
            }}
          />,
        ]);
      }, 50);

      return () => clearInterval(interval); // Clear interval on component unmount
    }, 3000); // Wait for 3 seconds (3000 milliseconds)

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []);

  const handleSubmit = () => {
    if (interest.trim() === '') {
      alert('NO CHEATING!');
    } else {
      navigate('/experience');
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      <div className="w-full max-w-md text-center mb-6">
        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Hero Logo"
          className="mx-auto w-42 h-40 object-contain mb-4"
        />
      </div>
      <div
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md transform rotate-180"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          What are some of your interests?
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Fill in before the emojis cover the screen!"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="w-full px-4 py-2 border rounded-md text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transform rotate-180"
          />
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </div>
      {/* Display emojis */}
      {emojis}
    </div>
  );
}

export default Interest;
