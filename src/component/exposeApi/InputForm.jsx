import { forwardRef, useImperativeHandle, useRef } from "react";

const InputForm = forwardRef(function InputForm(props, ref) {
  const formRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      clear() {
        formRef.current.reset();
      },
    };
  });

  return (
    <form ref={formRef}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>

      <p id="actions">
        <button type="submit">Save</button>
      </p>
    </form>
  );
});

export default InputForm;
