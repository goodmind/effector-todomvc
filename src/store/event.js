//@flow

import type {Event} from 'effector'
import * as types from './label'
import type {VisibilityFilter} from '../constants/TodoFilters'
import {domain} from './domain'

export const addTodo: Event<string> = domain.event(types.ADD_TODO)
export const deleteTodo: Event<number> = domain.event(types.DELETE_TODO)
export const editTodo: Event<{id: number, text: string}> = domain.event(
  types.EDIT_TODO
)
export const completeTodo: Event<number> = domain.event(types.COMPLETE_TODO)
export const completeAllTodos = domain.event(types.COMPLETE_ALL_TODOS)
export const clearCompleted = domain.event(types.CLEAR_COMPLETED)
export const setVisibilityFilter: Event<VisibilityFilter> = domain.event(
  types.SET_VISIBILITY_FILTER
)
