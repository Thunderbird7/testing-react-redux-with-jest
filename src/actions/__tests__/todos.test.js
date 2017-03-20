import { ADD_TODO, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../types'
import { addTodo } from '../todos'
import configureMockStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'
import 'isomorphic-fetch'
import { fetchTodos } from '../todos'

describe('Todos actions', () => {
  afterEach(() => nock.cleanAll())

  it('create FETCH_TODOS_FAILRE action', () => {
    nock('http://localhost:8080')
    .get('/api/Todos')
    .reply(422, 'Unprocessable Entity')

    const expectedActions = {
      type: FETCH_TODOS_FAILURE,
      error: 'Unprocessable Entity'
    }

    const createStore = configureMockStore([thunk])
    const store = createStore()

    store.dispatch(fetchTodos())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  it('create FETCH_TODOS_SUCCESS action', () => {
    nock('http://localhost:8080')
    .get('/api/Todos')
    .reply(200, [{ id: 1, text: 'Hello', complete: false }])

    const expectedActions = [{
        type: FETCH_TODOS_SUCCESS,
        payload: [{ id: 1, text: 'Hello', complete: false }]
      }]

    const createStore = configureMockStore([thunk])
    const store = createStore()

    store.dispatch(fetchTodos())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })

  it('creates ADD_TODO action when calling addTodo()', () => {
    const actual = addTodo('Sleep')
    const expected = {
      type: ADD_TODO,
      payload: {
        text: 'Sleep',
      },
    }
    expect(actual).toEqual(expected)
  })
})

