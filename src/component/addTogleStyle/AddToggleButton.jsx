import React from "react";

export default function App() {
  const [Color, setColor] = React.useState(false);
  function handelClick() {
    if (!Color) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  return (
    <div id="togglebutton">
      <p style={{ color: Color ? "red" : "white" }}>Style me!</p>
      <button onClick={handelClick}>Toggle style</button>
    </div>
  );
}
