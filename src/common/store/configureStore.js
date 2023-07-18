import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import adminReducer from './reducers/admin.reducer';
import globalReducer from './reducers/global.reducer';
import rolesReducer from './reducers/roles.reducer';
import toursReducer from './reducers/tours.reducer';
import userReducer from './reducers/user.reducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  global: globalReducer,
  roles: rolesReducer,
  user: userReducer,
  admin: adminReducer,
  tours: toursReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
const persistor = persistStore(store);
export { persistor, store };
