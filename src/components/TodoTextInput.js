//@flow

import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends React.Component<
  {
    onSave: Function,
    text?: string,
    placeholder?: string,
    editing?: boolean,
    newTodo?: boolean
  },
  {text: string}
> {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({text: ''})
      }
    }
  }

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({text: e.currentTarget.value})
  }

  handleBlur = (e: SyntheticEvent<HTMLInputElement>) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.currentTarget.value)
    }
  }

  render() {
    return (
      <input
        className={classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    )
  }
}
