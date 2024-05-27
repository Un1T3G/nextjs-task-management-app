import { ITask } from 'entities/task'

export interface IColumn {
  id: string
  title: string
  tasks: ITask[]
  tableId: string
}
