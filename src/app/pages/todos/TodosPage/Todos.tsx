import { useTodos } from "@business/todo/selectors"
import TodoCard from "./TodoCard"

const Todos = () => {
  const todos = useTodos()
  return <ul>
    {todos.map(todo => <TodoCard key={todo.id} todo={todo} />)}
  </ul>
}

export default Todos
