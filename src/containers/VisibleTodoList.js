//@flow

import * as React from 'react'
import TodoList from '../components/TodoList'
import {VisibleTodos} from '../store/computed/consumer'

export default (props: Object) => (
  <VisibleTodos>
    {todos => <TodoList {...props} filteredTodos={todos} />}
  </VisibleTodos>
)
