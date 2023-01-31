import { adminApi } from '@/services/admin/admin';
import { dashboardApi } from '@/services/dashboard/dashboard'
import { loginApi } from '@/services/login/login';
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [loginApi.reducerPath]:loginApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dashboardApi.middleware,
      adminApi.middleware,
      loginApi.middleware
    ),
})
setupListeners(store.dispatch);