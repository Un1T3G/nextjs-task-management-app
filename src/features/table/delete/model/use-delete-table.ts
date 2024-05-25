import { useUnit } from 'effector-react'
import { $selectedTable } from 'entities/table'
import { deleteTableDialogModel, deleteTableEvent } from './model'
import { useDialogApi } from 'shared/lib'

export const useDeleteTable = () => {
  const [table, deleteTable] = useUnit([$selectedTable, deleteTableEvent])

  const { open, toggleOpen } = useDialogApi(deleteTableDialogModel)

  const handleDeleteTable = () => {
    if (!table) {
      return
    }

    deleteTable(table.id)
    toggleOpen()
  }

  return {
    open,
    toggleOpen,
    deleteTable: handleDeleteTable,
    table: table!,
  }
}
