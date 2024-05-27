import { createEvent, createStore } from 'effector'

import { IUpdateTaskEventProps } from '../types'
import { $tables } from 'entities/table'
import { v4 as uuid } from 'uuid'
import { $openedTaskOptions } from 'entities/task'

export const updateTaskEvent = createEvent<IUpdateTaskEventProps>()

$tables.on(
  updateTaskEvent,
  (
    tables,
    { title, description, todos, columnId, tableIndex, columnIndex, taskIndex }
  ) => {
    const taskTodos =
      tables[tableIndex].columns[columnIndex].tasks[taskIndex].todos

    const newColumnIndex = tables[tableIndex].columns.findIndex(
      (x) => x.id === columnId
    )
    const newTaskIndex = tables[tableIndex].columns[
      newColumnIndex
    ].tasks.findIndex(
      (x) =>
        x.id !== tables[tableIndex].columns[columnIndex].tasks[taskIndex].id
    )

    const task = {
      ...tables[tableIndex].columns[columnIndex].tasks[taskIndex],
      title,
      description,
      todos: todos
        .map((x) => {
          if (x.isNewTodo) {
            return {
              id: uuid(),
              title: x.title,
              isDone: false,
            }
          }

          const todo = taskTodos.find((y) => y.id === x.id)

          return todo ? { ...todo, title: x.title } : null
        })
        .filter(Boolean) as any,
      columnId:
        newTaskIndex > -1
          ? tables[tableIndex].columns[newColumnIndex].id
          : columnId,
    }

    if (newTaskIndex === -1) {
      tables[tableIndex].columns[columnIndex].tasks = tables[
        tableIndex
      ].columns[columnIndex].tasks.filter((x, i) => i !== taskIndex)

      tables[tableIndex].columns[newColumnIndex].tasks = [
        ...tables[tableIndex].columns[newColumnIndex].tasks,
        task,
      ]
    } else {
      tables[tableIndex].columns[columnIndex].tasks[taskIndex] = task
    }

    tables[tableIndex].columns[columnIndex].tasks = [
      ...tables[tableIndex].columns[columnIndex].tasks,
    ]

    tables[tableIndex] = { ...tables[tableIndex] }

    return [...tables]
  }
)

$openedTaskOptions.on(updateTaskEvent, (state, payload) => {
  if (!state) {
    return state
  }

  const tables = $tables.getState()
  const newColumnIndex = tables[payload.tableIndex].columns.findIndex(
    (x) => x.id === payload.columnId
  )

  if (payload.columnIndex !== newColumnIndex) {
    return {
      ...state,
      columnIndex: newColumnIndex,
      taskIndex:
        tables[payload.tableIndex].columns[newColumnIndex].tasks.length - 1,
    }
  }

  return state
})

export const $updateTaskOptions = createStore<{
  tableIndex: number
  columnIndex: number
  taskIndex: number
} | null>(null)

export const setUpdateTaskOptionsEvent = createEvent<{
  tableIndex: number
  columnIndex: number
  taskIndex: number
} | null>()

$updateTaskOptions.on(setUpdateTaskOptionsEvent, (_, value) => value)
