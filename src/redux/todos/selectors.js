import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.items;
export const selectIsLoading = state => state.todos.isLoading;
export const selectIsError = state => state.todos.isError;
export const selectSortType = state => state.todos.sortType;

export const selectUncompletedTodos = state => {
  const todos = selectTodos(state);
  console.log('Calc uncompleted todos');

  return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0);
};

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
  console.log('Calc uncompleted todos MEMO');

  return todos.reduce((total, curr) => (!curr.completed ? total + 1 : total), 0);
});

export const selectSortedTodos = createSelector([selectTodos, selectSortType], (todos, sortType) => {
  switch (sortType) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(item => !item.completed);
    case 'completed':
      return todos.filter(item => item.completed);
  }
});
