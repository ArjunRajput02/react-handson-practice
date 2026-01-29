import React from "react";
import './AddDynamicStyle.css' 

export default function AddDynamicStyle() {
  const [isClicked, setIsClicked] = React.useState(false);

  function handleClick() {
    setIsClicked(true);
  }
  return (
    <div>
      <p className={isClicked ? "active" : undefined}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
