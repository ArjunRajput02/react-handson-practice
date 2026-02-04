import { forwardRef } from "react";

const InputField = forwardRef(function InputField({ label, ...props }, ref) {
  return (
    <p className="control">
      <label>{label}</label>
      <input ref={ref} {...props} />
    </p>
  );
});

export default InputField;
