import './AddEvent.css'

export const user = {
  email: '',
  password: '',
  loggedIn: false,
};


export default function AddEvent() {
    
    function handleClick(){
          user.email = "test@example.com";
          user.password = 'test';
          user.loggedIn = true;
          console.log(user.email)
          console.log(user.password)
          console.log(user.loggedIn)
      }
  return (
      
      
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick = {handleClick}>Login</button>
      </p>
    </div>
  );
}

