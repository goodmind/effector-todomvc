//@flow

import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoList = ({filteredTodos}: {filteredTodos: Array<Object>}) => (
  <ul className="todo-list">
    {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
  </ul>
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default TodoList
