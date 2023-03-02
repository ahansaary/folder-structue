import { AppDispatch, AppState } from '@business/store'
import { createListenerMiddleware } from '@reduxjs/toolkit'
import { addTodo, getTodos } from './reducer'
import { getTodosWorker, addTodoWorker } from './workers'

const todoWatcher = createListenerMiddleware<AppState, AppDispatch>()

todoWatcher.startListening({
  actionCreator: getTodos,
  effect: getTodosWorker
})

todoWatcher.startListening({
  actionCreator: addTodo,
  effect: addTodoWorker
})

export default todoWatcher.middleware
