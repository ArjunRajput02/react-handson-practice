import React from "react";

export default function ManageWorkout({
  title,
  description,
  time,
  onComplete,
}) {
  const timer = React.useRef(null);

  function handleStartWorkout() {
    timer.current = setTimeout(() => {
      handleStopWorkout();
    }, time);
  }

  function handleStopWorkout() {
    clearTimeout(timer.current);

    onComplete();
  }

  return (
    <article className="show-workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      <p>
        <button onClick={handleStartWorkout}>Start</button>
        <button onClick={handleStopWorkout}>Stop</button>
      </p>
    </article>
  );
}
