export interface IUpdateTaskEventProps {
  title: string
  description: string
  todos: {
    id: string
    title: string
    isNewTodo?: boolean
  }[]
  columnId: string
  tableIndex: number
  columnIndex: number
  taskIndex: number
}

export interface IUpdateTaskFormState {
  title: string
  description: string
  todos: {
    id: string
    title: string
    isNewTodo?: boolean
  }[]
  columnId: string
}
