//@flow

import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({
  todosCount,
  completedCount,
  events
}: {
  todosCount: number,
  completedCount: number,
  events: Object
}) => (
  <section className="main">
    {!!todosCount && (
      <span>
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todosCount}
        />
        <label onClick={events.completeAllTodos} />
      </span>
    )}
    <VisibleTodoList />
    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={events.clearCompleted}
      />
    )}
  </section>
)

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  events: PropTypes.object.isRequired
}

export default MainSection
