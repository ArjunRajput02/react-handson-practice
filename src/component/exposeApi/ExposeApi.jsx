import { useRef } from "react";
import InputForm from "./InputForm";

export default function ExposeApi() {
  const formRef = useRef();

  function handleRestart() {
    formRef.current.clear();
  }

  return (
    <div id="expose-api">
      <button onClick={handleRestart}>Restart</button>
      <InputForm ref={formRef} />
    </div>
  );
}
