import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import api from '../lib/api';
import auth from './modules/auth';
import battles from './modules/battles';

const rootReducer = combineReducers({
  auth,
  battles,
  form: formReducer
});


const loggerMiddleware = createLogger();


export default function configureStore (preloadedState) {

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunk.withExtraArgument(api)
      // loggerMiddleware
    )
  )
}
