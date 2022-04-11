Part 1 - Introduction to React
Components & JSX
The App.js file defines a react component with the name “App”
Rendering continents into the <div> element in the index.html
It’s ID value is “root” - document.getElementById(‘root’);

Any JS code within the curly braces of the JSX (the return statement and parens) will be evaluated and the result of the evaluation is embedded into the defined place in the HTML produced by the component

JSX - Javascript XML
JSX returned by React components is compiled to JavaScript, handled by Babel
With JSX you can easily embed dynamic content by writing regulat (but appropriate) javascript within curly braces of the return statement
Every Tag needs to be closed in JSX (since its XML adjacent)
Self closing tags in JSX:
example - <br />

Multiple components & Props
We can define new components and use them inside others in the file, MULTIPLE TIMES IF WE LIKE
At its core, React is used to compose applications from specialized, reusable components
Traditional Structure would look like The App Component as the Root of the component tree
Data that you can pass to components are called props (short for properties)
The function defining the component has the parameter (props). The parameter receives an object as an argument, and inside the component charged with displaying the first component, there will be our first component with fields corresponding to all the properties defined by the user of the component
One component will receive the props and define them & where they go
The other component charged with displaying the data will have corresponding fields where the data should live

Things to Note with React
Have the liver server and console open to better understand what is happening at all times
Advance in small steps - if something fails to comply, get it into better working state before progressing
console.log() is your very best friend
A <div> must wrap you JSX in the return statement at all times to return ONE component! React does not do well with returning more than one in a single component. You can (sometimes) overwrite this div element with fragments
Fragments - Wrapping the elements to be returned by the component with an empty element
