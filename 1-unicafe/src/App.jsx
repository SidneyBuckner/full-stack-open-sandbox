import { useState } from 'react'

import './App.css'

const Statistics = ({feedbackCount})=>{
  const feedbackTotal = feedbackCount.good + feedbackCount.bad + feedbackCount.neutral;
  const calculateAverage = (goodFeedback, badFeedback, neutralFeedback, totalResponses)=>{
    const goodFeebackPoints = goodFeedback * 1;
    const badFeedbackPoints = badFeedback * 0
    const neutralFeedbackPoints = neutralFeedback * -1;

    return (goodFeebackPoints + badFeedbackPoints + neutralFeedbackPoints)/totalResponses;

  }
  if(feedbackTotal === 0){
    return <div>
      No Feedback Given
    </div>
  }
  return( 
  <div className='card'>
    <h2>Statistics</h2>
    <p>Good: {feedbackCount.good}</p>
    <p>Neutral: {feedbackCount.neutral}</p>
    <p>Bad: {feedbackCount.bad}</p>
    <p>Total: {feedbackTotal}</p>
          {/* average is caluated with multiplying the amount of good neutral and bad by 1 0 or negative 1 and diving that number by the total amount of answers*/}
    <p>Average: {!feedbackTotal ? 0: (calculateAverage(feedbackCount.good,feedbackCount.bad,feedbackCount.neutral,feedbackTotal ))}</p>
    <p>Positive: { !feedbackTotal ? 0:feedbackCount.good / (feedbackCount.good + feedbackCount.bad + feedbackCount.neutral)*100}%</p>
    </div>)


}


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
      <Statistics feedbackCount={feedbackCount}/>
    </div>
  );
}


export default App;
