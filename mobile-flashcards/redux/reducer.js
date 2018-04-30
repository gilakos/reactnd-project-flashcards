import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'

// import authReducer from '../modules/login/AuthState'
// import accountsReducer from '../modules/accounts/AccountsState'
// import actionsReducer from '../modules/actions/ActionsState'
// import transfersReducer from '../modules/timeline/TransfersState'

const reducers = {
  router: routerReducer,
  // auth: authReducer,
  // accounts: accountsReducer,
  // actions: actionsReducer,
  // transfers: transfersReducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
