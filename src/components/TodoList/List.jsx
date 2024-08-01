import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todos/selectors';
import { deleteTodo } from '../../redux/todos/slice';
import { selectFilter } from '../../redux/filter/selectors';

export const List = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));
  return (
    <ul>
      {filteredData.map(item => (
        <li key={item.id}>
          <p>{item.todo}</p>
          <button onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
