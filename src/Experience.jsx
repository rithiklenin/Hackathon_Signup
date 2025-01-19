import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Experience.css';

function Experience() {
  const [number, setNumber] = useState(50);
  const [isSwapped, setIsSwapped] = useState(false);
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [buttonPosition, setButtonPosition] = useState({ top: '30%', left: '30%' });
  const [imagePosition, setImagePosition] = useState({ top: '20%', left: '20%' });

  const [inputOne, setInputOne] = useState('');
  const [inputHundred, setInputHundred] = useState('');

  const navigate = useNavigate();

  const increase = () => {
    if (number < 100) {
      setNumber(number + 1);
      setIsSwapped(!isSwapped);
      moveContainer();
      moveConfirmButton();
      moveImage();
    }
  };

  const decrease = () => {
    if (number > 1) {
      setNumber(number - 1);
      setIsSwapped(!isSwapped);
      moveContainer();
      moveConfirmButton();
      moveImage();
    }
  };

  const moveContainer = () => {
    const newTop = Math.floor(Math.random() * 80) + 10;
    const newLeft = Math.floor(Math.random() * 80) + 10;

    setPosition({
      top: `${newTop}%`,
      left: `${newLeft}%`,
    });
  };

  const moveConfirmButton = () => {
    const newTop = Math.floor(Math.random() * 80) + 10;
    const newLeft = Math.floor(Math.random() * 80) + 10;

    setButtonPosition({
      top: `${newTop}%`,
      left: `${newLeft}%`,
    });
  };

  const moveImage = () => {
    const newTop = Math.floor(Math.random() * 80) + 10;
    const newLeft = Math.floor(Math.random() * 80) + 10;

    setImagePosition({
      top: `${newTop}%`,
      left: `${newLeft}%`,
    });
  };

  const handleConfirmClick = () => {
    alert(`You confirmed the value: ${number}`);
    navigate('/confirm');
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      <div className="w-full max-w-md text-center mb-6">

        <img
          src={'./src/assets/hero-logo.jpeg'}
          alt="Hero Logo"
          className="mx-auto w-42 h-40 object-contain mb-4"
          style={{
            position: 'absolute',
            top: imagePosition.top,
            left: imagePosition.left,
            transform: 'translate(-50%, -50%)',
            transition: 'top 0.3s, left 0.3s',
          }}
        />
      </div>

      <div className="outer-container" style={{ top: position.top, left: position.left }}>
        <div className="heading">
          Enter your work experience on a scale of 1 to 100
        </div>
        <div className="input-container">
          <label>
            Enter what you consider as 1:
            <input
              type="text"
              value={inputOne}
              onChange={(e) => setInputOne(e.target.value)}
              placeholder="Enter description for 1"
            />
          </label>
          <label>
            Enter what you consider as 100:
            <input
              type="text"
              value={inputHundred}
              onChange={(e) => setInputHundred(e.target.value)}
              placeholder="Enter description for 100"
            />
          </label>
        </div>
        <div className="container">
          {isSwapped ? (
            <>
              <button className="button" onClick={increase}>+</button>
              <div className="number">{number}</div>
              <button className="button" onClick={decrease}>-</button>
            </>
          ) : (
            <>
              <button className="button" onClick={decrease}>-</button>
              <div className="number">{number}</div>
              <button className="button" onClick={increase}>+</button>
            </>
          )}
        </div>
      </div>

      <div
        className="confirm-container"
        style={{
          position: 'absolute',
          top: buttonPosition.top,
          left: buttonPosition.left,
          transform: 'translate(-50%, -50%)',
          transition: 'top 0.3s, left 0.3s',
        }}
      >
        <button className="button" onClick={handleConfirmClick}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Experience;
