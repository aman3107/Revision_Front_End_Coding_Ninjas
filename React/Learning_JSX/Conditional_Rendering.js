const User = (name) =>{
    let logIn = true;
    return(
        <>
        <h1>Hello {name}!</h1>
        <h2>Hello {logIn?"Alexa":"User"}</h2>
        </>
    );
}

function App(){
    let loggedIn = false;
    if(loggedIn){
        return User("Aman");
    }
    else{
        return User('User!');
    }
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);