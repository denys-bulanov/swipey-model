import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import characterReducer from './slices/characterSlice'
import AppReducer from './slices/appSlice'

export const store = configureStore({
  reducer: {
    character: characterReducer,
    app: AppReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

setupListeners(store.dispatch)

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
