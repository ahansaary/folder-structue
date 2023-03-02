import { configureStore } from '@reduxjs/toolkit'
import { rootMiddleware } from './middleware'
import { rootReducer } from './reducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: rootMiddleware,
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
