import { createEvent, createStore } from 'effector'
import { IDeleteTaskEventProps } from '../types'
import { $tables } from 'entities/table'

import { ITask } from 'entities/task'

export const deleteTaskEvent = createEvent<IDeleteTaskEventProps>()

$tables.on(
  deleteTaskEvent,
  (tables, { tableIndex, columnIndex, taskIndex }) => {
    tables[tableIndex].columns[columnIndex].tasks = tables[tableIndex].columns[
      columnIndex
    ].tasks.filter((_, i) => i !== taskIndex)

    tables[tableIndex] = { ...tables[tableIndex] }

    return [...tables]
  }
)

export const $deleteTaskOptions = createStore<{
  tableIndex: number
  columnIndex: number
  taskIndex: number
} | null>(null)

export const setDeleteTaskOptionsEvent = createEvent<{
  tableIndex: number
  columnIndex: number
  taskIndex: number
} | null>()

$deleteTaskOptions.on(setDeleteTaskOptionsEvent, (_, value) => value)
