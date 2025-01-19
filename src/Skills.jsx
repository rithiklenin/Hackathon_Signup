import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Skills.css';

function Skills() {
  const [skills, setSkills] = useState('');
  const [error, setError] = useState('');
  const [clickCount, setClickCount] = useState(0);

  // Define invalid skills
  const invalidSkills = ['Word', 'Powerpoint', 'Excel', 'HTML', 'Node.js'];

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (invalidSkills.includes(skills)) {
      // If the skill is invalid, show an error and reset the clickCount
      setError('Invalid skill entered. Please choose a valid skill.');
      setClickCount(0); // Reset to ensure no progress on invalid skills
      return;
    }

    setError(''); // Clear the error if the skill is valid

    if (clickCount < 4) {
      // Increment click count and show the confirmation message
      setClickCount(clickCount + 1);
    } else {
      // Fifth click: Submit the skill
      const newTab = window.open(
        'https://www.indeed.com/career-advice/career-development/career-advancement-skills',
        '_blank',
        'noopener,noreferrer'
      );
      
      if (newTab) {
        window.focus(); // Refocus on the current window
      }
    
      alert(`Signed up with skills: ${skills}`);
      setSkills(''); // Clear the input
      setClickCount(0); // Reset click count
      navigate('/interest'); // Navigate to /interest
    }
    
  };

  // Dynamic styles for the "Are you sure?" message
  const confirmationStyles = {
    color: `hsl(${clickCount * 60}, 100%, 50%)`, // Change color based on click count
    fontSize: `${16 + clickCount * 4}px`, // Increase font size based on click count
    transition: 'all 0.3s ease', // Smooth transition for color and size
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md text-center mb-6">
        <img
          src={'/hero-logo-roll.svg'}
          alt="Hero Logo"
          className="mx-auto w-42 h-40 object-contain mb-4 transform rotate-180"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 w-120 max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          What skills do you have?
        </h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            list="skills-list"
            className="w-full px-4 py-2 border rounded-md bg-slate-50text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          {/* Datalist with predefined options */}
          <datalist id="skills-list">
            <option value="Word" />
            <option value="Powerpoint" />
            <option value="Excel" />
            <option value="HTML" />
            <option value="Node.js" />
          </datalist>

          {/* Error message */}
          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          {/* Confirmation message */}
          {clickCount > 0 && clickCount < 5 && (
            <p className="text-center" style={confirmationStyles}>
              Are you sure?
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {clickCount < 4 ? 'Submit' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
