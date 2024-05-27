import { createEvent } from 'effector'
import { IChangeTaskColumnEventProps } from '../types'
import { $tables } from 'entities/table'

export const changeTaskColumnEvent = createEvent<IChangeTaskColumnEventProps>()

$tables.on(
  changeTaskColumnEvent,
  (tables, { fromColumnId, newColumnId, tableIndex, taskIndex }) => {
    const table = tables[tableIndex]
    const fromColumn = table.columns.find(
      (column) => column.id === fromColumnId
    )
    const newColumn = table.columns.find((column) => column.id === newColumnId)

    if (!fromColumn || !newColumn) {
      return tables
    }

    const task = fromColumn.tasks[taskIndex]
    task.columnId = newColumn.id

    fromColumn.tasks = fromColumn.tasks.filter((_, i) => i !== taskIndex)
    newColumn.tasks = [...newColumn.tasks, task]

    tables[tableIndex] = { ...table }

    return [...tables]
  }
)
