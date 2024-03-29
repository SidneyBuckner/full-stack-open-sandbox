// NB at this point you can assume that there are always three items,
//so there is no need to go through the arrays using loops.
// Do not pass different objects as separate props from the
// App component to the components Content and Total. Instead, pass them directly as an array

const Header = (headerProps) => {
  return (
    <div>
      <h1>{headerProps.headerCourse}</h1>
    </div>
  );
};

//The Part component takes in the parameter props as an object
// and tells us how the props will be displayed
// placeholders here!!!!!
const Part = (partProps) => {
  // console.log("PROPS FROM PART", props);
  return (
    <p>
      {partProps.name} {partProps.exercises}
    </p>
  );
};

//The Content component gives us corresponding fields
// of the Props in Part component and defines what data will explicitly be displayed
const Content = (contentProps) => {
  // console.log("PROPS FROM CONTENT", props);
  return (
    <div>
      {/* Were calling name to indicate props.name1 as the direct 
      data we intend to display from what we return in App */}
      <Part
        name={contentProps.contentParts[0].name}
        exercises={contentProps.contentParts[0].exercises}
      />
      <Part
        name={contentProps.contentParts[1].name}
        exercises={contentProps.contentParts[1].exercises}
      />
      <Part
        name={contentProps.contentParts[2].name}
        exercises={contentProps.contentParts[2].exercises}
      />
      {/* <Part name={props.name0} exercises={props.exercises0} />
      <Part name={props.name1} exercises={props.exercises1} />
      <Part name={props.name2} exercises={props.exercises2} /> */}
    </div>
  );
};

const Total = (totalProps) => {
  // console.log("PROPS FROM TOTAL", props);
  //What can I do with forEach() to refactor here?
  return (
    <p>
      Number of exercises:{" "}
      {totalProps.exerciseParts[0].exercises +
        totalProps.exerciseParts[1].exercises +
        totalProps.exerciseParts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ]
  };

  //HERE is where we define the object's actual names and placeholders for the data we intend to fill in the props above!
  // name1 is what we indicate as part1.name that we want to return in content
  return (
    <div>
      <Header headerCourse={course.name} />

      <Content
        contentParts={course.parts}
        // name0={parts[0].name}
        // name1={parts[1].name}
        // name2={parts[2].name}
        // exercises0={parts[0].exercises}
        // exercises1={parts[1].exercises}
        // exercises2={parts[2].exercises}
      />

      <Total
        exerciseParts={course.parts}
        // exercises0={parts[0].exercises}
        // exercises1={parts[1].exercises}
        // exercises2={parts[2].exercises}
      />
    </div>
  );
};

export default App;
