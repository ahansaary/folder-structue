import { AppDispatch, AppState } from "@business/store"
import { Todo } from "@domain/models/todo.model"
import { ListenerEffect, PayloadAction } from "@reduxjs/toolkit"

export interface TodoState {
  count: number
  todos: Todo[]
  isLoading: boolean
  isAdding: boolean
  error: string | null
}

export interface TodoAction<T = Partial<TodoState>> extends PayloadAction<T> {}

export interface TodoWorker<T = Partial<TodoState>> extends ListenerEffect<TodoAction<T>, AppState, AppDispatch> {}
