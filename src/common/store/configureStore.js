import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import globalReducer from './reducers/global.reducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  global: globalReducer
});

const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer);


const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
const persistor = persistStore(store);
export { persistor, store };

