const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

//The Part component takes in the parameter props as an object
// and tells us how the props will be displayed
// placeholders here!!!!!
const Part = (props) => {
  console.log("PROPS FROM PART", props);
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

//The Content component gives us corresponding fields
// of the Props in Part component and defines what data will explicitly be displayed
const Content = (props) => {
  console.log("PROPS FROM CONTENT", props);
  return (
    <div>
      {/* Were calling name to indicate props.name1 as the direct 
      data we intend to display from what we return in App */}
      <Part name={props.name0} exercises={props.exercises0} />
      <Part name={props.name1} exercises={props.exercises1} />
      <Part name={props.name2} exercises={props.exercises2} />
    </div>
  );
};

const Total = (props) => {
  // console.log("PROPS FROM TOTAL", props);
  //What can I do with forEach() to refeactor here?
  return (
    <p>
      Number of exercises:{" "}
      {props.exercises0 + props.exercises1 + props.exercises2}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    //index 0
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    //index 1
    {
      name: "Using props to pass data",
      exercises: 7
    },
    //index 2
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  //HERE is where we define the object's actual names and placeholders for the data we intend to fill in the props above!
  // name1 is what we indicate as part1.name that we want to return in content
  return (
    <div>
      <Header course={course} />

      <Content
        name0={parts[0].name}
        name1={parts[1].name}
        name2={parts[2].name}
        exercises0={parts[0].exercises}
        exercises1={parts[1].exercises}
        exercises2={parts[2].exercises}
      />

      <Total
        exercises0={parts[0].exercises}
        exercises1={parts[1].exercises}
        exercises2={parts[2].exercises}
      />
    </div>
  );
};

export default App;