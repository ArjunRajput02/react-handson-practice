import React from "react";
export default function AddButtonClass() {
  const [choice, setChoice] = React.useState(null);

  let textcolor = "highlight-white";
  if (choice === "yes") {
    textcolor = "highlight-green";
  } else if (choice === "no") {
    textcolor = "highlight-red";
  }
  return (
    <div id="dynamicbutton">
      <h1 className={textcolor}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setChoice("yes")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setChoice("no")}>No</button>
        </li>
      </menu>
    </div>
  );
}
