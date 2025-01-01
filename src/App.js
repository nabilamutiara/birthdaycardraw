import React, { useState } from "react";
import "./App.css";
import birthdayImage from './birthdaycake.png'; 

function App() {
  const [showCard, setShowCard] = useState(false);
  const [cardAnimating, setCardAnimating] = useState(false);

  const handleButtonClick = () => {
    setCardAnimating(true);
    
    setTimeout(() => {
      setShowCard(true);
    }, 1000); 
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>
        Show Birthday Card
      </button>

      <div className={`card ${cardAnimating ? "show" : ""}`}>
        <h1>Happy Birthday!</h1>
        <img src={birthdayImage} alt="Birthday Cake" />
        <p>Wishing you a day filled with love, joy, and laughter!</p>

        {showCard && <p>May all your wishes come true!</p>}
      </div>
    </div>
  );
}

export default App;
