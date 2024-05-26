import { createEvent } from 'effector'
import { IUpdateTableEventProps } from '../types'
import { $tables } from 'entities/table'
import { createDialogApi } from 'shared/lib'

export const updateTableEvent = createEvent<IUpdateTableEventProps>()

$tables.on(updateTableEvent, (tables, { title, columns, tableIndex }) => {
  const table = {
    ...tables[tableIndex],
    title,
    columns: columns
      .map((x) => {
        if (x.isNewColumn) {
          return {
            id: x.id,
            title: x.title,
            tasks: [],
            tableId: tables[tableIndex].id,
          }
        }

        const column = tables[tableIndex].columns.find((y) => y.id === x.id)

        return column ? { ...column, title: x.title } : null
      })
      .filter(Boolean) as any,
  }

  tables[tableIndex] = table

  return [...tables]
})

export const updateTableDialogModel = createDialogApi()
