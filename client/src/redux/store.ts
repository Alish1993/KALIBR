import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import modalsReducer from './slices/modals/modalsSlice';
import ordersReducer from './slices/orders/ordersSlice';
import loaderPackAutoReducer  from './slices/calculator/calcSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modals: modalsReducer,
    orders: ordersReducer,
    loaderPackAuto: loaderPackAutoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
