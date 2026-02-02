import InputProps from "./InputProps.jsx";

export default function AddProps() {
  return (
    <div id="addprops">
      <InputProps type="text" placeholder="Your name" />
      <InputProps richText placeholder="Your message" />
    </div>
  );
}
