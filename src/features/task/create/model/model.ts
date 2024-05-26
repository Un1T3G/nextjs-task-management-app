import { createEvent } from 'effector'
import { createDialogApi } from 'shared/lib'
import { ICreateTaskEventProps } from '../types'
import { $tables } from 'entities/table'
import { ITask } from 'entities/task'
import { v4 as uuid } from 'uuid'

export const createTaskEvent = createEvent<ICreateTaskEventProps>()

$tables.on(
  createTaskEvent,
  (
    tables,
    { title, description, todos, columnId, tableIndex, columnIndex }
  ) => {
    const newTask: ITask = {
      id: uuid(),
      title,
      description,
      todos: todos.map((title) => ({
        id: uuid(),
        title,
        isDone: false,
      })),
      columnId,
    }

    const tasks = tables[tableIndex].columns[columnIndex].tasks

    tables[tableIndex].columns[columnIndex].tasks = [...tasks, newTask]

    tables[tableIndex] = { ...tables[tableIndex] }

    return [...tables]
  }
)

export const createTaskDialogModel = createDialogApi()
