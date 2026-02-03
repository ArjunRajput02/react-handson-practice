import ShowCard from "./component/card/ShowCard.jsx";
import MainUser from "./component/addUser/MainUser.jsx";
import ShowCourse from "./component/course/ShowCourse.jsx";
import AddEvent from "./component/addEvent/AddEvent.jsx";
import AddConfigureButton from "./component/addConfigureButton/AddConfigureButton.jsx";
import ShowGoal from "./component/mainGoal/ShowGoal.jsx";
import AddUseState from "./component/addUseState/AddUseState.jsx";
import AddConditionalState from "./component/addConditionalState/AddConditionalState.jsx";
import AddDynamicStyle from "./component/addDynamicStyle/AddDynamicStyle.jsx";
import AddListDynamic from "./component/addListDynamic/AddListDynamic.jsx";
import SummaryText from "./component/addFragment/SummmaryText.jsx";
import AddProps from "./component/addForwardProps/AddProps.jsx";
import ShowButton from "./component/addFlexibleComponent/ShowButton.jsx";
import AddFeedback from "./component/addFeedback/AddFeedback.jsx";
import AddButtonClass from "./component/addCssClass/AddButtonClass.jsx";

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
      <AddDynamicStyle />
      <AddListDynamic />
      <SummaryText />
      <AddProps />
      <ShowButton />
      <AddFeedback />
      <AddButtonClass />
    </>
  );
}

export default App;
