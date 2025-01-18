import { useState } from 'react';
import './App.css';

function YearPage() {
    const [selectedYear, setSelectedYear] = useState(null);
    const [popupStage, setPopupStage] = useState(0); // Tracks the stage of the popup (0: no popup, 1: first, ..., 10: final)

    const handleButtonClick = (year) => {
        setSelectedYear(year);
        setPopupStage(1); // Show the first popup
    };

    const handleConfirm = () => {
        if (popupStage < 10) {
            setPopupStage(popupStage + 1); // Move to the next popup stage
        } else {
            alert(`You finally confirmed your choice: year ${selectedYear}`);
            setPopupStage(0); // Close all popups
        }
    };

    const handleCancel = () => {
        setPopupStage(0); // Close all popups
        setSelectedYear(null);
    };

    const handleMathAnswer = (isCorrect) => {
        if (isCorrect) {
            setPopupStage(popupStage + 1); // Move to the next stage if answer is correct
        } else {
            alert('Incorrect answer! Please try again.');
        }
    };

    const renderPopup = () => {
        let text = "";
        let buttons = [];

        switch (popupStage) {
            case 1:
                text = `You have chosen option ${selectedYear}. Are you sure?`;
                buttons = [
                    { label: "Yes", className: "bg-red-500", onClick: handleConfirm },
                    { label: "No", className: "bg-green-500", onClick: handleCancel },
                ];
                break;
            case 2:
                return (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-md shadow-lg text-center">
                            <p className="mb-4 text-xl font-bold">Skills Test for Hackathon</p>
                            <p className="mb-4">What is 5 + 3?</p>
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={() => handleMathAnswer(true)} // Correct answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    8
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    6
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    10
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    7
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                text = "Are you really sure?";
                buttons = [
                    { label: "No", className: "bg-green-500", onClick: handleCancel },
                    { label: "Yes", className: "bg-red-500", onClick: handleConfirm },
                ];
                break;
            case 4:
                return (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-md shadow-lg text-center">
                            <p className="mb-4 text-xl font-bold">Skills Test for Hackathon</p>
                            <p className="mb-4">What is 9 - 4?</p>
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={() => handleMathAnswer(true)} // Correct answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    5
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    3
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    6
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    4
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 5:
                text = "Are you REALLY sure?";
                buttons = [
                    { label: "Yes", className: "bg-green-500", onClick: handleConfirm },
                    { label: "No", className: "bg-red-500", onClick: handleCancel },
                ];
                break;
            case 6:
                return (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-md shadow-lg text-center">
                            <p className="mb-4 text-xl font-bold">Skills Test for Hackathon</p>
                            <p className="mb-4">What is 4 * 2?</p>
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={() => handleMathAnswer(true)} // Correct answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    8
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    6
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    10
                                </button>
                                <button
                                    onClick={() => handleMathAnswer(false)} // Incorrect answer
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md"
                                >
                                    12
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 7:
                text = "Are you REALLY REALLY sure?";
                buttons = [
                    { label: "No", className: "bg-green-500", onClick: handleCancel },
                    { label: "Yes", className: "bg-red-500", onClick: handleConfirm },
                ];
                break;
            case 8:
                text = "You are about to make your final decision. Confirm again?";
                buttons = [
                    { label: "Yes", className: "bg-green-500", onClick: handleConfirm },
                    { label: "No", className: "bg-red-500", onClick: handleCancel },
                ];
                break;
            case 9:
                text = "This is your last chance! Are you absolutely sure?";
                buttons = [
                    { label: "Yes", className: "bg-red-500", onClick: handleConfirm },
                    { label: "No", className: "bg-green-500", onClick: handleCancel },
                ];
                break;
            case 10:
                text = "Final confirmation. No turning back now!";
                buttons = [
                    { label: "No", className: "bg-green-500", onClick: handleCancel },
                    { label: "Yes", className: "bg-red-500", onClick: handleConfirm },
                ];
                break;
            default:
                return null;
        }

        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded-md shadow-lg text-center">
                    <p className="mb-4">{text}</p>
                    <div className="flex justify-center space-x-4">
                        {buttons.map(({ label, className, onClick }, index) => (
                            <button
                                key={index}
                                onClick={onClick}
                                className={`py-2 px-4 text-white rounded-md ${className}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-white">
            {/* Logo Section */}
            <div className="w-full max-w-md text-center mb-16 mt-8">
                <img
                    src={'./src/assets/hero-logo.jpeg'}
                    alt="Hero Logo"
                    className="mx-auto w-42 h-40 object-contain mb-4"
                />
            </div>

            {/* Year Buttons */}
            <div className="flex flex-col space-y-4 mb-8 w-full max-w-xs">
                {[
                    { label: "Click here for the 2nd odd number", year: 3 },
                    { label: "Click here for the 1st positive number", year: 1 },
                    { label: "Click here for the number above 1", year: 2 },
                    { label: "Click here for the number above 3", year: 4 },
                ].map(({ label, year }) => (
                    <button
                        key={year}
                        onClick={() => handleButtonClick(year)}
                        className="py-4 px-6 bg-blue-500 text-white rounded-md w-full"
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Render Popup */}
            {renderPopup()}
        </div>
    );
}

export default YearPage;
