import { Checkbox } from '@mui/joy'
import { useToggleTodo } from '../model'
import { ITodo } from 'entities/todo'

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  todoIndex: number
  todo: ITodo
  className?: string
}

export const ToggleTodo = ({
  tableIndex,
  columnIndex,
  taskIndex,
  todoIndex,
  todo,
  className,
}: IProps) => {
  const { toggleTodo } = useToggleTodo({
    tableIndex,
    columnIndex,
    taskIndex,
    todoIndex,
  })

  return (
    <Checkbox
      checked={todo.isDone}
      onChange={toggleTodo}
      className={className}
    />
  )
}
