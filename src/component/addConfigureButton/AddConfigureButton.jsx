import { userConfigure } from "../../utils/constant";

export default function AddConfigurationButton() {
  function handleCreateUser(name) {
    userConfigure.name = name;
    alert(userConfigure.name);
  }

  return (
    <div id="add-configure">
      <h1 id="add-configure-h1">User Login</h1>
      <p>
        <label id="add-configure-label">Name</label>
        <input id="add-configure-input" type="text" />
      </p>

      <p id="add-configure-actions ">
        <button
          id="add-configure-button"
          onClick={() => handleCreateUser("Arjun")}
        >
          Create User
        </button>
      </p>
    </div>
  );
}
