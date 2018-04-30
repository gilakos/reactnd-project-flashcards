import { applyMiddleware, createStore, compose } from 'redux'
import createHistory from 'history/createMemoryHistory'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import rootSaga from './sagas'
import actionLoggerMiddleware from './actionLoggerMiddleware'

const sagaMiddleware = createSagaMiddleware()

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const enhancer = compose(
  applyMiddleware(historyMiddleware, sagaMiddleware, actionLoggerMiddleware),
  global.reduxNativeDevTools
    ? global.reduxNativeDevTools(/*options*/)
    : nope => nope
)

// create the store
const store = createStore(
  reducer,
  enhancer
)

sagaMiddleware.run(rootSaga)

if (global.reduxNativeDevTools) {
  global.reduxNativeDevToolsCompose(store)
}

export default store
