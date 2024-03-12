import { useState } from 'react'

import './App.css'

const App = ()=> {
  // State variables to track the number of clicks for each feedback category
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  // Function to handle feedback submission for each category
  const handleGoodFeedback = () => {
    setGoodCount((prevCount) => prevCount + 1);
  };

  const handleNeutralFeedback = () => {
    setNeutralCount((prevCount) => prevCount + 1);
  };

  const handleBadFeedback = () => {
    setBadCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Unicafe Customer Feedback</h1>
      <p>How is our service? Please choose from the options below:</p>
      <div>
        <button onClick={handleGoodFeedback}>Good</button>
        <button onClick={handleNeutralFeedback}>Neutral</button>
        <button onClick={handleBadFeedback}>Bad</button>
      </div>
      <div className='card'>
        <h2>Feedback Summary</h2>
        <p>Good: {goodCount}</p>
        <p>Neutral: {neutralCount}</p>
        <p>Bad: {badCount}</p>
      </div>
    </div>
  );
}


export default App
