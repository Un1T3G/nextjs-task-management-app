import { useUnit } from 'effector-react'
import { $updateTaskOptions, setUpdateTaskOptionsEvent } from './model'

export const useUpdateTaskDialog = () => {
  const [updateTaskOptions, setUpdateTaskOptions] = useUnit([
    $updateTaskOptions,
    setUpdateTaskOptionsEvent,
  ])

  const handleOnClose = () => {
    setUpdateTaskOptions(null)
  }

  return {
    open: Boolean(updateTaskOptions),
    onClose: handleOnClose,
  }
}
