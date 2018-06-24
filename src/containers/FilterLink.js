//@flow

import * as React from 'react'
import type {VisibilityFilter} from '../constants/TodoFilters'
import {setVisibilityFilter} from '../store/event'
import {VisibilityFilterConsumer} from '../store/consumer'
import Link from '../components/Link'

class FilterLink extends React.Component<{
  filter: VisibilityFilter,
  children: React.Node
}> {
  setFilter = () => {
    setVisibilityFilter(this.props.filter)
  }
  render() {
    const {filter, ...props} = this.props
    return (
      <VisibilityFilterConsumer>
        {visibilityFilter => (
          <Link
            {...props}
            active={filter === visibilityFilter}
            setFilter={this.setFilter}
          />
        )}
      </VisibilityFilterConsumer>
    )
  }
}

export default FilterLink
