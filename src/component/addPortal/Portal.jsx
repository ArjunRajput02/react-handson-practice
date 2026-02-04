import React from "react";
import Toast from "./Toast";

function Portal() {
  const [showToast, setShowToast] = React.useState(false);

  function handleEnrol() {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  }

  return (
    <div id="portal">
      {showToast && <Toast message="You have successfully enrolled!" />}
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button id="portal-button" onClick={handleEnrol}>
          Enrol
        </button>
      </article>
    </div>
  );
}

export default Portal;
