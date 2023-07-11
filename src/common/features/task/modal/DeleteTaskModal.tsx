import { useAppDispatch } from '@/common/hooks/useRedux'
import { mainActions } from '@/common/store/slices/main'
import { Dialog } from '@/common/ui/dialog'

interface IProps {
  open: boolean
  onClose: VoidFunction
  tableIndex: number
  columnIndex: number
  taskIndex: number
  taskTitle: string
}

export function DeleteTaskModal({
  open,
  onClose,
  tableIndex,
  columnIndex,
  taskIndex,
  taskTitle,
}: IProps) {
  const subtitle = `Are you sure you want to delete the "${taskTitle}" board? This action will remove all columns and tasks and cannot be reversed.`

  const dispatch = useAppDispatch()
  const handleOnConfirm = () => {
    dispatch(
      mainActions.deleteTask({
        tableIndex,
        columnIndex,
        taskIndex,
      })
    )
  }

  return (
    <Dialog
      title="Delete this task?"
      subtitle={subtitle}
      confirmText="Delete"
      cancelText="Cancel"
      open={open}
      onClose={onClose}
      onConfirm={handleOnConfirm}
    />
  )
}
