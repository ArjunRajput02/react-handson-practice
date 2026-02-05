import React from "react";

export default function AddRef() {
  const filePicker = React.useRef();

  function handleClick() {
    filePicker.current.click();
  }

  return (
    <div id="addref">
      <p>Please select an image</p>
      <p>
        <input id="filepick" ref={filePicker} type="file" accept="image/*" />
        <button id="pick-image" onClick={handleClick}>
          Pick Image
        </button>
      </p>
    </div>
  );
}
