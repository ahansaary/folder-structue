import { useAppSelector } from "@business/hooks";
import { TodoState } from "./types";

export const useTodoState = () => useAppSelector<TodoState>(state => state.todo)

export const useTodos = () => useTodoState().todos

export const useIsLoadingTodos = () => useTodoState().isLoading

export const useIsAddingTodo = () => useTodoState().isAdding

export const useRemainingTodos = () => useTodoState().todos.filter(todo => !todo.done)

export const useDoneTodos = () => useTodoState().todos.filter(todo => todo.done)
