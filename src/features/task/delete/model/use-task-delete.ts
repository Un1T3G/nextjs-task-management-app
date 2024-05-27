import { useUnit } from 'effector-react'

import {
  $deleteTaskOptions,
  deleteTaskEvent,
  setDeleteTaskOptionsEvent,
} from './model'
import { useTask } from 'entities/task'
import { useDeleteTaskDialog } from './use-delete-dialog'

export const useTaskDelete = () => {
  const [deleteTaskOptions, deleteTask] = useUnit([
    $deleteTaskOptions,
    deleteTaskEvent,
  ])

  const { task } = useTask(deleteTaskOptions!)

  const { onClose } = useDeleteTaskDialog()

  const handleDeleteTask = () => {
    deleteTask({
      tableIndex: deleteTaskOptions!.tableIndex,
      columnIndex: deleteTaskOptions!.columnIndex,
      taskIndex: deleteTaskOptions!.taskIndex,
    })
    onClose()
  }

  return {
    deleteTable: handleDeleteTask,
    task,
  }
}
