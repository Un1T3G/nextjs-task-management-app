import { createEvent } from 'effector'
import { $tables } from 'entities/table'
import { createDialogApi } from 'shared/lib'

export const deleteTableEvent = createEvent<string>()

$tables.on(deleteTableEvent, (tables, tableId) =>
  tables.filter((x) => x.id !== tableId)
)

export const deleteTableDialogModel = createDialogApi()
