import React from "react";

export function counter(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }

  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }

  if (action.type === "RESET") {
    return { count: 0 };
  }

  return state;
}

export default function CounterReducer() {
  const [state, dispatch] = React.useReducer(counter, { count: 0 });

  return (
    <div id="counter-reducer">
      <h1>The (Final?) Counter</h1>
      <p id="counter">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </p>
      <p id="state">{state.count}</p>
    </div>
  );
}
