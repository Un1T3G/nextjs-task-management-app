import { ITask } from 'entities/task/'

export const getCompletedTaskCount = (task: ITask) => {
  return task.todos.filter((x) => x.isDone).length
}
