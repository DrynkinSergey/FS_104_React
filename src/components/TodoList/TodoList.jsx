import { useEffect, useState } from 'react';
import todosData from './../../assets/todos.json';
import { TodoItem } from './TodoItem';
import s from './TodoList.module.css';
export const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(window.localStorage.getItem('todos'));
    if (savedTodos?.length) {
      return savedTodos;
    }
    return [];
  });
  const [newTodoValue, setNewTodoValue] = useState('');

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  const handleAddTodo = () => {
    const newTodo = { id: new Date().getTime(), todo: newTodoValue, completed: false };
    setTodos(prev => [...prev, newTodo]);
  };
  return (
    <>
      <div className='flex'>
        <input onChange={e => setNewTodoValue(e.target.value)} className={s.input} />
        <button onClick={handleAddTodo} className='btn border'>
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos?.map(item => (
          <TodoItem handleDeleteTodo={handleDeleteTodo} key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};
