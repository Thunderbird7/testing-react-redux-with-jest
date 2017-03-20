import React, { Component } from 'react'

class NewTodo extends Component {

  state = {
    text: ''
  }

  constructor(props) {
    super(props)
    this.changeTextHandler = this.changeTextHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  changeTextHandler(event) {
    this.setState({
      text: event.target.value
    })
  }

  clickHandler() {
    this.props.addTodo(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div className="new-todo">
        <input onChange={this.changeTextHandler} value={this.state.text} />
        <button className="btn btn-primary" onClick={this.clickHandler} >Add</button>
      </div>
    )
  }
}

export default NewTodo
