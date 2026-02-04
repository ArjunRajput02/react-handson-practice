import { useRef } from "react";
import InputField from "./InputField";
import { Data } from "../../utils/constant";

export default function ForwardRef() {
  const nameRef = useRef();
  const emailRef = useRef();

  function handleSaveData() {
    Data.name = nameRef.current.value;
    Data.email = emailRef.current.value;

    alert(Data.name);
  }

  return (
    <div id="input-field">
      <InputField ref={nameRef} type="text" label="Your Name" />
      <InputField ref={emailRef} type="email" label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
