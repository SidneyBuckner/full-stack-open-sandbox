import { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    'If it hurts, do it more often.',
    'When we hit our lowest point, we are open to the greatest change.',
    'When in doubt, (console) log it out!',
    'Make it work, then make it pretty.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const points = new Array(anecdotes.length).fill(0);
  const [pointCount, setPointCount] = useState(points);
  const mostPopularAnecdote = pointCount.indexOf(Math.max(...pointCount));
// Get random number when clicking button
const handleClick = ()=>{
  const selected = Math.floor(Math.random()*11);
  return setSelected(selected);
  }
  const handleVote = () => {
    const pointsCopy = [...pointCount];
    pointsCopy[selected]+=1;
    setPointCount(pointsCopy);
  }
  const handleVoteReset = ()=>{
    setPointCount(points);
  }
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p> This has {pointCount[selected]} Votes</p>
      <button onClick={()=>{handleClick()}}>next anecdote: </button>
      <button onClick={()=>{handleVote()}}>Vote for this anecdote!</button>
      <button onClick={()=>{handleVoteReset()}}>Reset All Votes</button>

      <h3>Anecdote with the most votes: </h3>
      <p>"{anecdotes[mostPopularAnecdote]}" has: {pointCount[mostPopularAnecdote]}  points</p>
    </div>
  )
}

export default App;