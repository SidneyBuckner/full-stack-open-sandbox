import { useState } from 'react'

import './App.css'

const App = ()=> {
const [feedbackCount, setFeedbackCount] = useState({good: 0,
neutral: 0, bad: 0})

  // Function to handle feedback submission for each category
  const handleFeedback = (feedbackType) => {
    setFeedbackCount((prevCount) => ({ ...prevCount, [feedbackType]: prevCount[feedbackType] + 1}));
  };
  return (
    <div>
      <h1>Unicafe Customer Feedback</h1>
      <p>How is our service? Please choose from the options below:</p>
      <div>
        <button onClick={()=> handleFeedback('good')}>Good</button>
        <button onClick={()=> handleFeedback('neutral')}>Neutral</button>
        <button onClick={()=> handleFeedback('bad')}>Bad</button>
      </div>
      <div className='card'>
        <h2>Feedback Summary</h2>
        <p>Good: {feedbackCount.good}</p>
        <p>Neutral: {feedbackCount.neutral}</p>
        <p>Bad: {feedbackCount.bad}</p>
      </div>
    </div>
  );
}


export default App;
