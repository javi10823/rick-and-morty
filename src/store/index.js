import {configureStore} from '@reduxjs/toolkit';
import {rickandmortyApi} from './api/rickandmorty';
import counterReducer from './slices/counter';

export const store = configureStore({
  reducer: {
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickandmortyApi.middleware),
});
