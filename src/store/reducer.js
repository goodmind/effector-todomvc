//@flow

import {todos, visibilityFilter} from './shape'
import {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAllTodos,
  clearCompleted,
  setVisibilityFilter
} from './event'

todos
  .on(addTodo, (state, text) => [
    ...state,
    {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text
    }
  ])
  .on(deleteTodo, (state, id) => state.filter(todo => todo.id !== id))
  .on(editTodo, (state, {id, text}) =>
    state.map(
      todo =>
        todo.id === id
          ? {
              ...todo,
              text
            }
          : todo
    )
  )
  .on(completeTodo, (state, id) =>
    state.map(
      todo =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
    )
  )
  .on(completeAllTodos, state => {
    const areAllMarked = state.every(todo => todo.completed)
    return state.map(todo => ({
      ...todo,
      completed: !areAllMarked
    }))
  })
  .on(clearCompleted, state => state.filter(todo => todo.completed === false))

visibilityFilter.on(setVisibilityFilter, (state, filter) => filter)
