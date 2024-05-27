import { createEvent } from 'effector'
import { IDropNewTaskEventProps } from '../types'
import { $tables } from 'entities/table'

export const dropNewTaskOnColumnEvent = createEvent<IDropNewTaskEventProps>()

$tables.on(
  dropNewTaskOnColumnEvent,
  (tables, { fromColumnIndex, toColumnIndex, tableIndex, dropTaskIndex }) => {
    const task =
      tables[tableIndex].columns[fromColumnIndex].tasks[dropTaskIndex]
    task.columnId = tables[tableIndex].columns[toColumnIndex].id

    tables[tableIndex].columns[fromColumnIndex].tasks = tables[
      tableIndex
    ].columns[fromColumnIndex].tasks.filter((_, i) => i !== dropTaskIndex)

    tables[tableIndex].columns[toColumnIndex].tasks = [
      ...tables[tableIndex].columns[toColumnIndex].tasks,
      task,
    ]

    tables[tableIndex] = { ...tables[tableIndex] }

    return [...tables]
  }
)
