import { ISubtask } from './ISubtask'

export interface ITask {
  id: string
  title: string
  description: string
  subtasks: ISubtask[]
}
