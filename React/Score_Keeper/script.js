var score = 0;
var wicket = 0;
let ballWiseRes = [];

// function clickOne(val){
//     score = score + val;
// }

// const handleAdd = (inc) =>{
//     score = score + inc;
// }

// function addOne() {
//   score += 1;
//   rootElement.render(<App />);
// }

// function addTwo() {
//   score += 2;
//   rootElement.render(<App />);
// }

function addScore(val) {
  if (wicket < 10) {
    ballWiseRes.push(val);
    score += val;
    rootElement.render(<App />);
    console.log(ballWiseRes);
  }
}

function addWicket(val) {
  if (wicket < 10) {
    ballWiseRes.push("W");
    wicket += val;
    rootElement.render(<App />);
    console.log(ballWiseRes);
  }
}

const ScoreButtons = () =>(
  <div>
      <button onClick={() => addScore(0)}>0</button>
      <button onClick={() => addScore(1)}>1</button>
      <button onClick={() => addScore(2)}>2</button>
      <button onClick={() => addScore(3)}>3</button>
      <button onClick={() => addScore(4)}>4</button>
      <button onClick={() => addScore(5)}>5</button>
      <button onClick={() => addScore(6)}>6</button>
      <button onClick={() => addWicket(1)} className = "wicket">wicket</button>
    </div>
)
/* {(ind+1) % 6 == 0? <p>{(ind+1)/6} Over</p>:null} */

const Result = () =>(
  <div>
    {ballWiseRes.map((ele,ind) =>(
      <>
      {ind % 6 == 0? <br />:null}
      <span key = {ind}  style ={{color : ele === "W"?"red":null}}>{ele === 0?<strong>.</strong>:ele} &nbsp; &nbsp;</span>
      </>
    ))}
  </div>
)

function handleSubmit(event){
  event.preventDefault();
}

const Form = () =>(
  <form onSubmit = {handleSubmit}>
    <input type = "text" />
    <input type = "text"/>
    <button>Submit</button>
  </form>
)

const App = () => (
  <>
    <h1> SCORE KEEPER</h1>
    <h2>
      SCORE: {score}/{wicket}
    </h2>
    <ScoreButtons />
    <br/>
    <Form />
    <hr />
    
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
