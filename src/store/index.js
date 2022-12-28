import {configureStore} from '@reduxjs/toolkit';
import {rickandmortyApi} from './api/rickandmorty';

export const store = configureStore({
  reducer: {
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rickandmortyApi.middleware),
});
