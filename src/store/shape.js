//@flow

import {createStoreObject, type Store} from 'effector'
import {domain} from './domain'
import {SHOW_ALL, type VisibilityFilter} from '../constants/TodoFilters'

export type Todo = {
  text: string,
  completed: boolean,
  id: number
}

export const todos: Store<Array<Todo>> = domain.store([
  {
    text: 'Use Effector',
    completed: false,
    id: 0
  }
])

export const visibilityFilter: Store<VisibilityFilter> = domain.store(SHOW_ALL)

export default createStoreObject({
  todos,
  visibilityFilter
})
