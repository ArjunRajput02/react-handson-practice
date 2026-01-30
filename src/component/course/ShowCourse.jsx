import CourseGoal from "./CourseGoal.jsx";

function ShowCourse() {
  return (
    <div id="coursegoal" data-testid="app">
      <h1 id="h2">Time to Practice</h1>
      <p>One course, many goals! 🎯</p>

      <ul>
        <CourseGoal title="Learn React" description="In-depth" />
        <CourseGoal title="Learn State" description="In-depth" />
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
      </ul>
    </div>
  );
}

export default ShowCourse;
