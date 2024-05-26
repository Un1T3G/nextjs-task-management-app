import { createEvent } from 'effector'
import { ICreateTableEventProps } from '../types'
import { $tables, ITable } from 'entities/table'
import { v4 as uuidv4 } from 'uuid'
import { createDialogApi } from 'shared/lib'

export const createTableEvent = createEvent<ICreateTableEventProps>()

$tables.on(createTableEvent, (tables, { title, columnTitles }) => {
  const id = uuidv4()

  const newTable: ITable = {
    id: id,
    title,
    columns: columnTitles.map((title) => ({
      id: uuidv4(),
      title,
      tasks: [],
      tableId: id,
    })),
  }

  return [...tables, newTable]
})

export const createTableDialogModel = createDialogApi()
