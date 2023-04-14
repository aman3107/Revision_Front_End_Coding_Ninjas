const jsxPara = (
    <div>
        <p>My name is Aman Mittal</p>
        <p>I'm 23 years Old</p>
        <p>I'm working as a Software Developer</p>
    </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(jsxPara);
React.createElement("div",
{
    id: "parent",
    class: "parent-class"
},
React.createElement("p", null, "Hello world"));