// Complete the Form Component and export it
import {name,email} from './HomePage';

function handleSubmit(event){
  event.preventDefault();
}

export const Form = () => (
  <>
    <div>
      <form onSubmit = {handleSubmit}>
      <h3>Login Page</h3>
      <input type = "text" value = {name}/>
      <br/>
      <br/>
      <input type = "email" value = {email}/>
      <br/>
      <br/>
      <button>Login</button>
      </form>
    </div>
  </>
);
