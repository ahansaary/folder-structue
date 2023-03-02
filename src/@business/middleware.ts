import { ConfigureStoreOptions, Middleware } from "@reduxjs/toolkit"
import logger from 'redux-logger'
import auth from "./auth/watchers"
import todo from "./todo/watchers"

const watchers: Middleware[] = [auth, todo]

export const rootMiddleware: ConfigureStoreOptions['middleware'] = getDefaultMiddleware => {
  return getDefaultMiddleware().prepend(...watchers).concat(logger)
}
