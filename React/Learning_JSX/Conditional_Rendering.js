const User = (name) => {
  let logIn = true;
  let fname = "Virat";
  let lname = "";
  return (
    <>
      <h1>Hello {name}!</h1>
      <h2>{name == "Aman" ? "Welcome to the portal" : ""}</h2>
      <h2>Hello {logIn ? "Alexa" : "User"}</h2>
      <h2>{logIn && true ? "Welcome to the Portal" : ""}</h2>
      {logIn && <h2>Welcome Aman</h2>}
      {/* <div>
        {fname && lname ? (
          <h2>
            {lname} {fname}
          </h2>
        ) : (
          <h2>{fname}</h2>
        )}
      </div> */}
      <h2>Hello {logIn?lname || fname:fname}!</h2>
    </>
  );
};

function App() {
  let loggedIn = true;
  if (loggedIn) {
    return User("Aman");
  } else {
    return User("User!");
  }
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);
