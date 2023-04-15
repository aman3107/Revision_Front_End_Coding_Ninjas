function App() {
  return (
    <>
      <h1>Hello JSX</h1>
      <p>This is created using JSX</p>
    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function App1() {
  return (
    <>
      <h1>React Project</h1>
      <p>Skills used to make this project</p>
      <ol>
        <li>HTML</li>
        <li>javaScript</li>
        <li>CSS</li>
      </ol>
    </>
  );
}

// ReactDOM.createRoot(document.getElementById("root1")).render(<App1 />)

const App2 = () => 
  <>
    <h1>Functional Components using Arrow Function</h1>
  </>;

ReactDOM.createRoot(document.getElementById("root2")).render(
  <>
    <App />
    <App1 />
    <App2 />
  </>
);
