import React from "react";

export default function AddUseState() {
  const [valueChange, setValueChange] = React.useState(100);
  function handleClick() {
    setValueChange(75);
  }
  return (
    <div id="usestate">
      <p>${valueChange}</p>
      <button onClick={handleClick}>Apply Discount</button>
    </div>
  );
}
