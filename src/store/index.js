import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
// ​
import auth from './modules/auth'

const rootReducer = combineReducers({
  auth
})

const loggerMiddleware = createLogger()
// ​
export default function configureStore (preloadedState) {

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
