import { createEvent } from 'effector'
import { IToggleTodoEventProps } from '../types'
import { $tables } from 'entities/table'

export const toggleTodoEvent = createEvent<IToggleTodoEventProps>()

$tables.on(
  toggleTodoEvent,
  (tables, { tableIndex, taskIndex, columnIndex, todoIndex }) => {
    tables[tableIndex].columns[columnIndex].tasks[taskIndex].todos[
      todoIndex
    ].isDone =
      !tables[tableIndex].columns[columnIndex].tasks[taskIndex].todos[todoIndex]
        .isDone

    tables[tableIndex] = { ...tables[tableIndex] }

    return [...tables]
  }
)
