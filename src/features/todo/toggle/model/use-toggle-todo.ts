import { useUnit } from 'effector-react'

import { toggleTodoEvent } from './model'

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  todoIndex: number
}

export const useToggleTodo = ({
  tableIndex,
  columnIndex,
  taskIndex,
  todoIndex,
}: IProps) => {
  const [toggleTodo] = useUnit([toggleTodoEvent])

  const handleToggleTodo = () => {
    toggleTodo({
      tableIndex,
      columnIndex,
      taskIndex,
      todoIndex,
    })
  }

  return {
    toggleTodo: handleToggleTodo,
  }
}
