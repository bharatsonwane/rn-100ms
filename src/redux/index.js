import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import appSlice from './reducers/appSlice';

export const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    ms100: userSlice.reducer,
    app: appSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(listenerMiddleware.middleware),
});
