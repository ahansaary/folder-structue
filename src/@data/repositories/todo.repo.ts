import Api from "@data/remote/client";
import { Todo } from "@domain/models/todo.model";
import { ITodoRepository } from "@domain/repositories/todo.repo";

export default class TodoRepository implements ITodoRepository {
  async getTodos() {
    return Api.get<Todo[]>('/todos').then(res => res.data)
  };

  async addTodo(todo: Todo) {
    return Api.post<Todo>('/todos', todo).then(res => res.data)
  };
}

export const todoRepo = new TodoRepository()
