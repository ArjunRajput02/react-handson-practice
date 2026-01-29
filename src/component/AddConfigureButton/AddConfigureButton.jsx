import "./AddConfigureButton.css";
export const user = {
  name: "",
};

export default function AddConfigurationButton() {
  function handleCreateUser(name) {
    user.name = name;
    console.log(user.name);
  }

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p id="actions">
        <button onClick={() => handleCreateUser("Arjun")}>Create User</button>
      </p>
    </div>
  );
}
