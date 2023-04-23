// const div = document.createElement("div");

// const heading = document.createElement("h1");
// heading.textContent = "Hello";
// heading.className = "header";

// const para = document.createElement("p");
// para.textContent = "Welcome to the session";
// para.className = "para";

// const btn = document.createElement("button");
// btn.textContent = "Click";
// btn.className = "btn";

// div.append(heading);
// div.append(para);
// div.append(btn);

// document.getElementById("root").append(div);
// const heading = document.createElement("h1");
// heading.textContent = "Hello";
// heading.className = "header2";
// document.getElementById("root").append(heading);
// console.log("JavaScript Element :", heading);

// const reactHeading = React.createElement("h1",{className:"head", id:"reactHead"},"Hello React");
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);
// console.log("React Element :", reactHeading);

/* React With JS */
// const imgCodingNinjas = React.createElement("img",{className:"Coding", src:"https://files.codingninjas.in/coding-ninjas-24647.png"});

/* React with JSX */

const jsxHeading = <h1>Hello World</h1>;
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
console.log("Hello World");
