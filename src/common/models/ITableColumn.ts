import { ITask } from './ITask'

export interface ITableColumn {
  id: string
  title: string
  tasks: ITask[]
}
