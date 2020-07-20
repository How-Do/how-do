import reducer from './reducer'
import searchReducer from './searchReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const combinedReducer = combineReducers({ reducer, searchReducer })

export default createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(promiseMiddleware))
)
