import { ADD_TODO, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './types'

export const addTodo = text => ({
  type: ADD_TODO,
  payload: { text },
})

const fetchTodosSuccess = todos => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
})

const fetchTodosFailure = error => ({
  type: FETCH_TODOS_FAILURE,
  error: error
})

export const fetchTodos = () => (dispatch) => {
  const uri = 'http://localhost:8080/api/Todos'
  return fetch(uri)
  .then((response) => {
    if (!response.ok) throw Error(response.statusText)
    return response.json()
  })
  .then(todos => dispatch(fetchTodosSuccess(todos)))
  .catch(err => {
    console.log(err.message)
    dispatch(fetchTodosFailure(err.message))
  })
}
