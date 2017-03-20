import { createStore as createReduxStore } from 'redux'
import rootReducer from '../reducers'
import thunk from 'thunk'
import createLogger from 'redux-logger'

const logger = createLogger()
const createStore = (initialState) => {
  const store = createReduxStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
  return store
}
// const store = createStore(
//   rootReducer,
//   {},
//   applyMiddleWare(thunk, logger)
// )

export { createStore }