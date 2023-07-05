import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import globalReducer from './reducers/global.reducer';

const middleware = [];
const rootReducer = combineReducers({
  global: globalReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
