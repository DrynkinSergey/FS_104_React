import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todos/selectors';

export const List = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map(item => (
        <li key={item.id}>
          <p>{item.todo}</p>
          <button onClick={() => dispatch(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
