export interface ICreateTaskEventProps {
  title: string
  description: string
  todos: string[]
  columnId: string
  tableIndex: number
  columnIndex: number
}

export interface ICreateTaskFormState {
  title: string
  description: string
  todos: {
    title: string
  }[]
  columnId: string
}
