import shape, {todos, visibilityFilter} from './shape'
import {createStoreConsumer} from 'effector-react'

export const TodosConsumer = createStoreConsumer(todos)

export const VisibilityFilterConsumer = createStoreConsumer(visibilityFilter)

export const RootConsumer = createStoreConsumer(shape)
