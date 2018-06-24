//@flow

import {createStoreConsumer} from 'effector-react'
import {completedTodoCount, visibleTodos} from '.'

export const VisibleTodos = createStoreConsumer(visibleTodos)

export const CompletedTodoCount = createStoreConsumer(completedTodoCount)
