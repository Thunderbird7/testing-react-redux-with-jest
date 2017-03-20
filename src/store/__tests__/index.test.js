import { createStore } from '../'
import todosReducer from '../../reducers/todosReducer'
import { ADD_TODO } from '../../actions/types'

describe('store', () => {
  let store

  beforeEach(() => {
    store = createStore()
  })

  it('handle action in child reducer', () => {
    const action = {
      type: ADD_TODO,
      payload: 'Hello',
    }
    store.dispatch(action)

    expect(store.getState().todos).toEqual(todosReducer(undefined, action))
  })

  it('load initial state collectly', () => {
    const preloadState = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ]
    }
    
    store = createStore(preloadState)

    expect(store.getState().todos).toEqual(preloadState.todos)
  })

  it('has correct default state of the root reducer', () => {
    expect(store.getState().todos).toEqual(todosReducer(undefined, {}))
  })

})