import React from "react";
import ManageWorkout from "./ManageWorkout";
import { workouts } from "../../utils/constant";

export default function ShowWorkout() {
  const [completedWorkouts, setCompletedWorkouts] = React.useState([]);

  function handleWorkoutComplete(workoutTitle) {
    setCompletedWorkouts((prevCompletedWorkouts) => [
      ...prevCompletedWorkouts,
      workoutTitle,
    ]);
  }

  return (
    <main>
      <section className="workout">
        <h2>Choose a workout</h2>
        <ul className="workout-list">
          {workouts.map((workout) => (
            <li key={workout.title}>
              <ManageWorkout
                {...workout}
                onComplete={() => handleWorkoutComplete(workout.title)}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="workout">
        <h2>Completed workouts</h2>
        <ul>
          {completedWorkouts.map((workoutTitle, index) => (
            <li key={index}>{workoutTitle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
