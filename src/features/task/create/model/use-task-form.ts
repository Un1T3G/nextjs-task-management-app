import { SubmitHandler, useForm } from 'react-hook-form'
import { ICreateTaskFormState } from '../types'
import { useUnit } from 'effector-react'
import { $selectedTable, $selectedTableIndex } from 'entities/table'
import { createTaskEvent } from './model'
import { yupResolver } from '@hookform/resolvers/yup'
import { createTaskDialogSchema } from './schema'

interface IProps {
  onCreate: VoidFunction
}

export const useCreateTaskForm = ({ onCreate }: IProps) => {
  const { control, handleSubmit, reset } = useForm<ICreateTaskFormState>({
    defaultValues: {
      title: '',
      description: '',
      todos: [],
      columnId: '',
    },
    resolver: yupResolver(createTaskDialogSchema as any),
  })

  const [table, tableIndex, createTask] = useUnit([
    $selectedTable,
    $selectedTableIndex,
    createTaskEvent,
  ])

  const onSubmit: SubmitHandler<ICreateTaskFormState> = (data) => {
    createTask({
      title: data.title,
      description: data.description,
      columnId: data.columnId,
      todos: data.todos.map((x) => x.title),
      tableIndex: tableIndex,
      columnIndex:
        table?.columns.findIndex((x) => x.id === data.columnId) ?? -1,
    })
    reset()
    onCreate()
  }

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
  }
}
