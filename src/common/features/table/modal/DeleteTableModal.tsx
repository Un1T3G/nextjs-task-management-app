import { useAppDispatch, useAppSelector } from '@/common/hooks/useRedux'
import { ITable } from '@/common/models/ITable'
import { mainActions } from '@/common/store/slices/main'
import { Dialog } from '@/common/ui/dialog'
import { useCallback } from 'react'

interface IProps {
  open: boolean
  onClose: VoidFunction
  tableIndex: number
}

export function DeleteTableModal({ open, onClose, tableIndex }: IProps) {
  const title = useAppSelector((x) => x.mainSlice.tables[tableIndex].title)

  const subtitle = `Are you sure you want to delete the "${title}" board? This action will remove all columns and tasks and cannot be reversed.`

  const dispatch = useAppDispatch()
  const handleOnConfirm = () => {
    dispatch(mainActions.deleteTable(tableIndex))
  }

  return (
    <Dialog
      title="Delete this board?"
      subtitle={subtitle}
      confirmText="Delete"
      cancelText="Cancel"
      open={open}
      onClose={onClose}
      onConfirm={handleOnConfirm}
    />
  )
}
