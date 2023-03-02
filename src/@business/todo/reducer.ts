import { Todo } from "@domain/models/todo.model"
import { createSlice } from "@reduxjs/toolkit"
import { TodoAction, TodoState } from "./types"

const initialState: TodoState = {
  count: 0,
  todos: [],
  isLoading: false,
  isAdding: false,
  error: null
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos(state) {
      state.isLoading = true
      state.error = null
    },
    getTodosSuccess(state, action: TodoAction<Todo[]>) {
      state.isLoading = false
      state.todos = action.payload
      state.count = action.payload.length
    },
    getTodosFailure(state, action: TodoAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    addTodo(state, action) {
      state.isAdding = true
      state.error = null
    },
    addTodoSuccess(state, action: TodoAction<Todo>) {
      state.isAdding = false
      state.todos = [...state.todos, action.payload]
      state.count++
    },
    addTodoFailure(state, action: TodoAction<string>) {
      state.isAdding = false
      state.error = action.payload
    },
  },
})

export const {getTodos, addTodo} = todoSlice.actions

export default todoSlice.reducer
