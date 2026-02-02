import React from "react";
import ShowFeedback from "./ShowFeedBack";

// don't change the Component name "App"
export default function AddFeedback() {
  const [name, setName] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeFeedback(event) {
    setFeedback(event.target.value);
  }

  function handleClick() {
    setName(!name);
  }
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleChangeFeedback} value={feedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleChangeName} value={name} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <ShowFeedback feedback={feedback} student={name} />

        <p>
          <button onClick={handleClick}>Save</button>
        </p>
      </section>
    </>
  );
}
