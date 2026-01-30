import TodoList from "./TodoList";
import { DUMMY_TODOS } from "../../utils/constant";

export default function AddListDynamic() {
  return (
    <div>
      <ul id="addlistul">
        {DUMMY_TODOS.map((item) => (
          <TodoList text={item} />
        ))}
      </ul>
    </div>
  );
}
