import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import accountReducer from './reducers/accountReducer'

const rootReducer = combineReducers({
  account: accountReducer,
})

export default createStore(rootReducer, composeWithDevTools());
