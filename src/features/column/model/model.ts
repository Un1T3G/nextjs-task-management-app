import { createEvent } from 'effector'
import { IChangeTaskColumnEventProps, IDropNewTaskEventProps } from '../types'
import { $tables } from 'entities/table'
import { $openedTaskOptions } from 'entities/task'

export const dropNewTaskOnColumnEvent = createEvent<IDropNewTaskEventProps>()
export const changeTaskColumnEvent = createEvent<IChangeTaskColumnEventProps>()

$tables
  .on(
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
  .on(
    changeTaskColumnEvent,
    (tables, { fromColumnId, newColumnId, tableIndex, taskIndex }) => {
      const table = tables[tableIndex]
      const fromColumn = table.columns.find(
        (column) => column.id === fromColumnId
      )
      const newColumn = table.columns.find(
        (column) => column.id === newColumnId
      )

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

$openedTaskOptions
  .on(dropNewTaskOnColumnEvent, (state, payload) => {
    if (!state) {
      return state
    }

    const tables = $tables.getState()

    if (
      state.columnIndex === payload.fromColumnIndex &&
      state.taskIndex === payload.dropTaskIndex
    ) {
      return {
        ...state,
        columnIndex: payload.toColumnIndex,
        taskIndex:
          tables[payload.tableIndex].columns[payload.toColumnIndex].tasks
            .length - 1,
      }
    }

    return state
  })
  .on(changeTaskColumnEvent, (state, payload) => {
    if (!state) {
      return state
    }

    const tables = $tables.getState()

    const fromColumnIndex = tables[payload.tableIndex].columns.findIndex(
      (x) => x.id === payload.fromColumnId
    )

    if (
      state.columnIndex === fromColumnIndex &&
      state.taskIndex === payload.taskIndex
    ) {
      const toColumnIndex = tables[payload.tableIndex].columns.findIndex(
        (x) => x.id === payload.newColumnId
      )

      return {
        ...state,
        columnIndex: toColumnIndex,
        taskIndex:
          tables[payload.tableIndex].columns[toColumnIndex].tasks.length - 1,
      }
    }

    return state
  })
