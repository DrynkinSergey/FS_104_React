import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todos/selectors';
import { deleteTodo } from '../../redux/todos/slice';
import { selectFilter } from '../../redux/filter/selectors';
import s from './TodoList.module.css';
export const List = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));
  return (
    <ul className={s.list}>
      {filteredData.map(item => (
        <li className={s.todo} key={item.id}>
          <p>{item.todo}</p>
          <button className={s.btn} onClick={() => dispatch(deleteTodo(item.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
