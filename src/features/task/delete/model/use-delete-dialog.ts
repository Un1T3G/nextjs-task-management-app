import { useUnit } from 'effector-react'
import { $deleteTaskOptions, setDeleteTaskOptionsEvent } from './model'

export const useDeleteTaskDialog = () => {
  const [deleteTaskOptions, setDeleteTaskOptions] = useUnit([
    $deleteTaskOptions,
    setDeleteTaskOptionsEvent,
  ])

  const handleOnClose = () => {
    setDeleteTaskOptions(null)
  }

  return {
    open: Boolean(deleteTaskOptions),
    onClose: handleOnClose,
  }
}
