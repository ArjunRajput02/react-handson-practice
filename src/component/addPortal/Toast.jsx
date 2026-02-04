import ReactDOM from "react-dom";

export default function Toast({ message }) {
  return ReactDOM.createPortal(
    <aside className="toast">
      <p>{message}</p>
    </aside>,
    document.querySelector("body"),
  );
}
