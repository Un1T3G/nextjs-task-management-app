import { ITodo } from 'entities/todo'

export interface ITaskOptions {
  tableIndex: number
  columnIndex: number
  taskIndex: number
}

export interface ITask {
  id: string
  title: string
  description: string
  todos: ITodo[]
  columnId: string
}
