import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

export const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(TodoList)