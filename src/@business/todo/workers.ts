import { todoRepo } from "@data/repositories/todo.repo";
import { Todo } from "@domain/models/todo.model";
import { todoSlice } from "./reducer";
import { TodoWorker } from "./types";

export const getTodosWorker: TodoWorker<any> = async (action, listener) => {
  try {
    const res = await todoRepo.getTodos()

    listener.dispatch(todoSlice.actions.getTodosSuccess(res))
  } catch (error) {
    listener.dispatch(todoSlice.actions.getTodosFailure('error'))
  }
}

export const addTodoWorker: TodoWorker<Todo> = async (action, listener) => {
  try {
    const res = await todoRepo.addTodo(action.payload)

    listener.dispatch(todoSlice.actions.addTodoSuccess(res))
  } catch (error) {
    listener.dispatch(todoSlice.actions.addTodoFailure('error'))
  }
}