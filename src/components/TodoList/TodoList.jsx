import { useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);

  const handleDeleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <div className='flex'>
        <input className={s.input} />
        <button className='btn border'>Add</button>
      </div>
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem handleDeleteTodo={handleDeleteTodo} key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};
