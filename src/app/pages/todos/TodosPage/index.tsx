import { useTodoState } from "@business/todo/selectors"
import Error from "@ui/core/Error"
import Loading from "@ui/core/Loading"
import NoTodosFound from "./NoTodosFound"
import Todos from "./Todos"

const TodosPage = () => {
  const {count, isLoading, error} = useTodoState()

  if (isLoading) return <Loading />
  if (error) return <Error message={error} />
  if (!count) return <NoTodosFound />

  return <Todos />
}

export default TodosPage
