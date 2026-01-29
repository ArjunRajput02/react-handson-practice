import Important from "./Important.jsx";

export default function MainGoal() {
  return (
    <div id="main">
      <h1 id="h1">Time to Practice!</h1>
      <p>Build a component and insert it below this text.</p>
      <p>
        Your <code>&lt;MainGoal&gt;</code> component should simply output some
        text that describes your main course goal (e.g., &quot;My main goal:
        Learn React in great detail&quot;).
      </p>
      <p>
        <strong>Important:</strong> You custom component must contain the text
        &quot;My main goal:&quot;
      </p>
      <p>
        <strong>Also important:</strong> For the automatic checks to succeed,
        you <strong>must export</strong> your custom component function! Not as
        a default but simply by adding the <code id="code">export</code> keyword
        in front of your function (e.g.,{" "}
        <code id="code">export function MainGoal</code>
        ).
      </p>
      <Important />
    </div>
  );
}
