// const jsxPara = (
//     <div>
//         <p>My name is Aman Mittal</p>
//         <p>I'm 23 years Old</p>
//         <p>I'm working as a Software Developer</p>
//         <a href="https://www.google.com" target="_blank">Google</a>
//     </div>
// );

const jsxPara = (
  <React.Fragment>
    <p>My name is Aman Mittal</p>
    <p>I'm 23 years Old</p>
    <p>I'm working as a Software Developer</p>
    <a href="https://www.google.com" target="_blank">
      Google
    </a>
  </React.Fragment>
);
ReactDOM.createRoot(document.getElementById("root")).render(jsxPara);

const aboutReact = (
    <>
    <h1>About React</h1>
    <p>React is a JavaScript Framework</p>
    <ul>
        <h4>Features of React</h4>
        <li>Single Page Application</li>
        <li>Declarative</li>
        <li>React is Component based language</li>
    </ul>
    </>
);

ReactDOM.createRoot(document.getElementById("root2")).render(aboutReact);
// const jsxEqui = React.createElement("div",
// {
//     id: "parent",
//     class: "parent-class"
// },
// React.createElement("p", null, "Hello world"));
// ReactDOM.craeteRoot(document.getElementById("root1")).render(jsxEqui);
const jsxEqui = React.createElement(
  "div",
  { className: "div1" },
  React.createElement("h2", { className: "heading" }, "Hello Aman Ji"),
  React.createElement("p", "", "I'm 20 years old")
);

ReactDOM.createRoot(document.getElementById("root1")).render(jsxEqui);
