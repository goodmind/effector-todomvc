//@flow

import {combine} from 'effector'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../../constants/TodoFilters'
import {todos, visibilityFilter} from '../shape'

export const visibleTodos = combine(
  visibilityFilter,
  todos,
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + visibilityFilter)
    }
  }
)

export const completedTodoCount = combine(todos, todos =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
)
