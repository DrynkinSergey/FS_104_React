import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/slice';
import { todosReducer } from './todos/slice';
import { filterReducer } from './filter/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, todosReducer);
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
