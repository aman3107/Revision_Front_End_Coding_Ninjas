
const Header = <h2>JSX Expression</h2>

const Heading = () => {
  var Name = "Aman";
  var age = 23;
  let demo = null;
  let sunset = false;
  let num;
  return (
    <>
      <h1>Lets Learn JSX</h1>
      {Header}
      <h2>Hello {Name}</h2>
      <h3>My age is {age} years old</h3>
      <h4>My bank balance is {demo}</h4>
      <p>Is Tomorrow is sunset {sunset}</p>
      <p>Number is undefined {num}</p>
      <p>Calling sum function {sum()}</p>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Heading />);

/* Expressions in JSX  */

function sum(){
  var a = 10;
  var b = 20;
  return a+b;
}

