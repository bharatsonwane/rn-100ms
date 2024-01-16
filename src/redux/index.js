// import ms100Slice from './reducers/ms100Slice';
import {createStore} from 'redux';

import rootReducer from './reducers/index';

export const store = createStore(rootReducer);

// export const listenerMiddleware = createListenerMiddleware();

// export const store = configureStore({
//   reducer: {
//     ms100: ms100Slice.reducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).prepend(listenerMiddleware.middleware),
// });
