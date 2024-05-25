import { ITodo } from 'entities/todo'

export interface ITask {
  id: string
  title: string
  description: string
  todos: ITodo[]
  columnId: string
}
