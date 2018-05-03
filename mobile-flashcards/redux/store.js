import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import reducer from './reducers'

const middleware = applyMiddleware(promise(), logger)

const store = createStore(reducer, composeWithDevTools(middleware))

export default store
