import { user } from "../../utils/constant";
export default function AddEvent() {
  function handleClick() {
    user.email = "test@example.com";
    user.password = "test";
    user.loggedIn = true;
    alert(user.email);
    alert(user.password);
    alert(user.loggedIn);
  }
  return (
    <div id="addevent">
      <h1 id="eventh1">User Login</h1>
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
        <button id="add-event-button" onClick={handleClick}>Login</button>
      </p>
    </div>
  );
}
