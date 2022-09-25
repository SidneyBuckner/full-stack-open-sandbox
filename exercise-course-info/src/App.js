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

  const Header = () => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    );
  };

  const Total = () => {
    const numberOfExercises =
      parts[0].exercises + parts[1].exercises + parts[1].exercises;
    return (
      <div>
        <p>Number of exercises: {numberOfExercises}</p>
      </div>
    );
  };

  const Content = () => {
    return (
      <div>
        <p>
          <p>
            {parts[0].name}: {parts[0].exercises}
          </p>
        </p>
        <p>
          <p>
            {parts[1].name}: {parts[1].exercises}
          </p>
        </p>
        <p>
          <p>
            {parts[2].name}: {parts[2].exercises}
          </p>
        </p>
      </div>
    );
  };
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};

export default App;
