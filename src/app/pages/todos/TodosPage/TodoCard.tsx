import { Todo } from "@domain/models/todo.model"
import { FC } from "react"

type Props = {
  todo: Todo
}

const TodoCard: FC<Props> = ({todo}) => {
  return <li>{todo.id}: {todo.text} ({todo.done ? 'done' : 'not yet'})</li>
}

export default TodoCard
