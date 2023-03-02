import { AppDispatch, AppState } from '@business/store'
import { createListenerMiddleware } from '@reduxjs/toolkit'
import { login } from './reducer'
import { loginWorker } from './workers'

const authWatcher = createListenerMiddleware<AppState, AppDispatch>()

authWatcher.startListening({
  actionCreator: login,
  effect: loginWorker
})

export default authWatcher.middleware
