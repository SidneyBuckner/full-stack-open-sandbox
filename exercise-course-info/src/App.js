const Header = (props)=>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
  }

  //The Part component takes in the parameter props as an object
  // and tells us how the props will be displayed
  // placeholders here!!!!!
const Part = (props)=>{
  return (<p>
    {props.part} {props.exercise}
  </p>);
}

//The Content component gives us corresponding fields
// of the Props in Part component and defines what data will explicitly be displayed
const Content = (props)=>{
  return(
  <div>
    <Part part={props.part1} exercise={props.exercises1}/>
    <Part part={props.part2} exercise={props.exercises2}/>
    <Part part={props.part3} exercise={props.exercises3}/>
  </div>
  )
  }

  const Total = (props)=>{ 
    return(
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p> 
    </div>)}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content        
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3} 
        />
      <Total         
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}

        />
    </div>
  )
}

export default App;