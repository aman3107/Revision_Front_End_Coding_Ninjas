
const b = {
    name:"Aman Mittal",
    age: 20,
};

function App(){
    const a = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Arrays and Objects in JSX</h1>
      {a.map((i) =>(<p key={i}>{i}</p>))}
      {a.map(function(i){
        return(
            <h2 key={i}>{i}</h2>
        )
      })}
      {a.filter(i => i % 2 == 0).map((i)=>(<p>Even Numbers :{i}</p>))}
      <p>Objects Values : {b.name} {b.name}</p>
    </>
  );
};

const carsModel = ["BMW","CRETA","SUV","JAGUAR","AUDI","MARUTI"]

const Cars = () =>{
  return(
    <>
    <ul>
      {carsModel.map((model) =>(<h3><li>{model}</li></h3>))}
    </ul>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<><App /><Cars /></>);