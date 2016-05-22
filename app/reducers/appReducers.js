import { combineReducers } from 'redux'
import setupReducer from './setupReducer';

const appReducers = combineReducers({
  setup: setupReducer
});

export default appReducers
