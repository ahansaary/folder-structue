import { Todo } from "@domain/models/todo.model";

export interface ITodoRepository {
  getTodos: () => Promise<Todo[]>
  addTodo: (todo: Todo) => Promise<Todo>
}
