import ShowCard from "./component/card/ShowCard.jsx";
import MainUser from "./component/addUser/MainUser.jsx";
import ShowCourse from "./component/course/ShowCourse.jsx";
import AddEvent from "./component/addEvent/AddEvent.jsx";
import AddConfigureButton from "./component/addConfigureButton/AddConfigureButton.jsx";
import ShowGoal from "./component/mainGoal/ShowGoal.jsx";
import AddUseState from "./component/addUseState/AddUseState.jsx";
import AddConditionalState from "./component/addConditionalState/AddConditionalState.jsx";

function App() {
  return (
    <>
      <ShowGoal />
      <MainUser />
      <ShowCourse />
      <ShowCard />
      <AddEvent />
      <AddConfigureButton />
      <AddUseState />
      <AddConditionalState />
    </>
  );
}

export default App;
