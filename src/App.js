import React, { useState, useRef } from 'react';
import "./App.css";
import audioFile from './happy-birthday-to-you-piano-version-13976.mp3';
import birthday1 from './1-removebg-preview.png';
import birthday2 from './2-removebg-preview.png';
import birthday3 from './3-removebg-preview.png';
import birthday4 from './4-removebg-preview.png';
import birthday5 from './5-removebg-preview.png';
import birthday6 from './6-removebg-preview.png';
import birthday7 from './7-removebg-preview.png';
import birthday9 from './9-removebg-preview.png';
import birthdayCakeImage from './birthdaycake.png'; 

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const audioRef = useRef(null); // Use useRef to store the audio object

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio if it already exists
    } else {
      audioRef.current = new Audio(audioFile); // Create a new audio element if it doesn't exist
      audioRef.current.play();
    }
    setIsClicked(true);
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the audio
      audioRef.current.currentTime = 0; // Reset the audio to the start
    }
  };

  const closeFrame = () => {
    setIsClicked(false);
    stopAudio(); // Stop the audio when closing the frame
  };

  return (
    <div className="container">
      {isClicked && (
        <div className="overlay">
          <div className="frame">
            <img src={birthdayCakeImage} alt="Birthday Cake" className="birthday-cake" />
            <h2>Happy Birthday! 🎉🎂</h2>
            <p>Wishing you a fantastic day filled with love, laughter, and all the things that bring you joy. May this year bring new adventures, great memories, and endless happiness. Cheers to another amazing year ahead! 🎈🎁🎊</p>
            <button className="close" onClick={closeFrame}>Close</button>
          </div>
        </div>
      )}
      
      <button className={`top-button ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        Click Me
      </button>

      <div className="number1">
        <img src={birthday7} alt="Birthday Cake 1" className="moving-image" />
      </div>
      <div className="number2">
        <img src={birthday3} alt="Birthday Cake 2" className="moving-image2" />
      </div>
      <div className="number3">
        <img src={birthday2} alt="Birthday Cake 3" className="moving-image" />
      </div>
      <div className="number4">
        <img src={birthday4} alt="Birthday Cake 4" className="moving-image2" />
      </div>
      <div className="number5">
        <img src={birthday6} alt="Birthday Cake 5" className="moving-image" />
      </div>
      <div className="number6">
        <img src={birthday5} alt="Birthday Cake 6" className="moving-image2" />
      </div>
      <div className="number7">
        <img src={birthday1} alt="Birthday Cake 7" className="moving-image" />
      </div>
      <div className="number9">
        <img src={birthday9} alt="Birthday Cake 9" className="moving-image" />
      </div>
    </div>
  );
}

export default App;
