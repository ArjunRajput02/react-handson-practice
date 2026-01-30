import ShowCard from "./component/Card/ShowCard";
import MainGoal from "./component/MainGoal/MainGoal";
import MainUser from "./component/AddUser/MainUser";
import ShowCourse from "./component/course/ShowCourse";
import AddEvent from "./component/AddEvent/AddEvent.jsx";
import AddConfigureButton from "./component/AddConfigureButton/AddConfigureButton.jsx";

function App() {
  return (
    <>
      <MainGoal />
      <MainUser />
      <ShowCourse />
      <ShowCard />
      <AddEvent />
      <AddConfigureButton />
    </>
  );
}

export default App;
