// const App = () => {
//   const now = new Date()
//   const a = 10;
//   const b = 20;

//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//     </div>
//   )
// }

const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Sidney"/>
    </div>
  )
}
export default App;
