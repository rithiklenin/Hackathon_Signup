import { useState, useEffect } from 'react';
import './Confirm.css';

function Confirm() {
  const [guesses, setGuesses] = useState('');
  const [attempts, setAttempts] = useState(0); // Track number of attempts
  const [completed, setCompleted] = useState(false); // Track completion
  const secretWord = 'THANK YOU';
  const letters = secretWord.split('');
  const maxAttempts = 10; // Max attempts to guess letters

  // Handle letter guesses
  const handleGuess = (event) => {
    const letter = event.target.value.toUpperCase();
    
    // Ensure it's a single character and hasn't been guessed before
    if (letter.length === 1 && !guesses.includes(letter) && letters.includes(letter) && attempts < maxAttempts) {
      setGuesses((prevGuesses) => {
        const updatedGuesses = prevGuesses.split('');
        updatedGuesses[letters.indexOf(letter)] = letter;
        return updatedGuesses.join('');
      });
    } else if (letter.length === 1 && !letters.includes(letter) && attempts < maxAttempts) {
      setAttempts((prevAttempts) => prevAttempts + 1); // Increase attempts on wrong guess
    }
  };

  // Check if the word is fully guessed
  useEffect(() => {
    if (guesses === secretWord) {
      setCompleted(true);
    }
  }, [guesses]);

  // Stop the game if attempts are over
  const isGameOver = attempts >= maxAttempts;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      <div className="w-full max-w-md text-center mb-6">
        {/* Display message only after game is over (win/lose) */}
        {(completed || isGameOver) && (
          <h1 className="text-2xl font-bold text-gray-800">We have received your submission. Hope you had fun!!!</h1>
        )}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Try to guess the word:</h2>

        {/* Display word with correct guesses */}
        <div className="text-4xl font-bold mt-4 text-center">
          {letters.map((letter, index) => (
            <span key={index} className="px-2">
              {guesses[index] || '_'} {/* Show underscores for unguessed letters */}
            </span>
          ))}
        </div>

        {/* Input for guessing letters */}
        <div className="mt-4 text-center">
          <p className="text-lg">Guess a letter! Attempts left: {maxAttempts - attempts}</p>
          <input
            type="text"
            maxLength="1"
            onChange={handleGuess}
            className="mt-4 w-10 text-center border rounded-md p-2 text-xl"
            placeholder="A"
            disabled={isGameOver || completed} // Disable input if game over or completed
          />
        </div>
      </div>

      {/* Display messages based on game state */}
      {completed ? (
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold text-green-600">Thank you!</h2>
          <p className="text-xl mt-4">You have successfully guessed the word!</p>
        </div>
      ) : isGameOver ? (
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-semibold text-red-600">Game Over!</h2>
          <p className="text-xl mt-4">You have run out of attempts! The word was: {secretWord}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Confirm;
