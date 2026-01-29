import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CourseGoal } from "./component/CourseGoal";

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>

      <ul>
        {/* Rendering Props here */}
        <CourseGoal title="Learn React" description="In-depth" />
        <CourseGoal
          title="Practice Working"
          description="Practice Working With Deep "
        />
      </ul>
    </div>
  );
}

export default App;
