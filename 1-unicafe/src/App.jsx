import { useState } from 'react'

import './App.css'

const App = ()=> {
  const baseStatisticsCount = new Array(3).fill(0);
  const [statisticsCount, setStatisticsCount] = useState(baseStatisticsCount);

  
  return (
    <>
      <div>
        <h1>Which Kingdom Hearts is Better?</h1>
        <button>Kingdom Hearts</button>{"  "}
        <button>Kingdom Hearts II</button>{"  "}
        <button>Kingdom Hearts III</button>
      </div>
      
      <div className="card">
        <h1>Statistics</h1>
        <p>Kingdom Hearts: {}</p>
        <p>Kingdom Hearts II: {} </p>
        <p>Kingdom Hearts III: {} </p>
      </div>
    </>
  )
}

export default App
