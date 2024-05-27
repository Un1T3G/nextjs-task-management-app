import { SubmitHandler, useForm } from 'react-hook-form'
import { IUpdateTaskFormState } from '../types'
import { useUnit } from 'effector-react'

import { yupResolver } from '@hookform/resolvers/yup'
import { updateTaskDialogSchema } from './schema'
import { $updateTaskOptions, updateTaskEvent } from './model'
import { useTask } from 'entities/task'

interface IProps {
  onCreate: VoidFunction
}

export const useUpdateTaskForm = ({ onCreate }: IProps) => {
  const [updateTaskOptions, updateTask] = useUnit([
    $updateTaskOptions,
    updateTaskEvent,
  ])

  const { tableIndex, columnIndex, taskIndex } = updateTaskOptions!

  const { task } = useTask({ tableIndex, columnIndex, taskIndex })

  const { control, handleSubmit, reset } = useForm<IUpdateTaskFormState>({
    defaultValues: {
      title: task.title,
      description: task.description,
      todos: task.todos.map((x) => ({
        id: x.id,
        title: x.title,
      })),
      columnId: task.columnId,
    },
    resolver: yupResolver(updateTaskDialogSchema as any),
  })

  const onSubmit: SubmitHandler<IUpdateTaskFormState> = (data) => {
    updateTask({
      title: data.title,
      description: data.description,
      columnId: data.columnId,
      todos: data.todos,
      tableIndex,
      columnIndex,
      taskIndex,
    })
    reset()
    onCreate()
  }

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
  }
}
