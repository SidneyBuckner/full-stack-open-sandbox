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
const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

//The Content component gives us corresponding fields
// of the Props in Part component and defines what data will explicitly be displayed
const Content = (props) => {
  return (
    <div>
      {/* Were calling name to indicate props.name1 as the direct 
      data we intend to display from what we return in App */}
      <Part name={props.name1} exercises={props.exercises1} />
      <Part name={props.name2} exercises={props.exercises2} />
      <Part name={props.name3} exercises={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises:{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () =>
{
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  //HERE is where we define the object's actual names and placeholders for the data we intend to fill in the props above! 
  // name1 is what we indicate as part1.name that we want to return in content 
  return (
    <div>
      <Header course={course} />

      <Content
        name1={part1.name}
        name2={part2.name}
        name3={part3.name}
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />

      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  );
};

export default App;