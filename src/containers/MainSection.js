//@flow

import * as React from 'react'
import {combine} from 'effector'
import {createStoreConsumer} from 'effector-react'
import * as TodoEvents from '../store/event'
import MainSection from '../components/MainSection'
import {completedTodoCount} from '../store/computed'
import {todos} from '../store/shape'

const Store = createStoreConsumer(
  combine(todos, completedTodoCount, (todos, completedCount) => ({
    todosCount: todos.length,
    completedCount
  }))
)

export default (props: Object) => (
  <Store>
    {state => <MainSection {...props} {...state} events={TodoEvents} />}
  </Store>
)
