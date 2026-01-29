import TodoList from "./TodoList";
import './AddListDynamic.css';

export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function AddListDynamic() {
  
    return (
    <div>
      <ul>
        {DUMMY_TODOS.map((item) => (
          <TodoList text={item} />
        ))}
      </ul>
    </div>
  );
}
