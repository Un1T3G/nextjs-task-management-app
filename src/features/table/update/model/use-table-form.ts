import { SubmitHandler, useForm } from 'react-hook-form'
import { IUpdateTableEventProps, IUpdateTableFormState } from '../types'

import { useUnit } from 'effector-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { createTableFormSchema } from './schema'
import { updateTableEvent } from './model'
import { $selectedTable, $selectedTableIndex } from 'entities/table'

interface IProps {
  onCreate: VoidFunction
}

export const useUpdateTableForm = ({ onCreate }: IProps) => {
  const [updateTable, table, tableIndex] = useUnit([
    updateTableEvent,
    $selectedTable,
    $selectedTableIndex,
  ])

  const { control, handleSubmit, reset } = useForm<IUpdateTableFormState>({
    defaultValues: {
      title: table?.title!,
      columns: table?.columns!.map((x) => ({
        id: x.id,
        title: x.title,
      })),
    },
    resolver: yupResolver<IUpdateTableFormState>(createTableFormSchema as any),
  })

  const onSubmit: SubmitHandler<IUpdateTableFormState> = (data) => {
    updateTable({
      title: data.title,
      columns: data.columns,
      tableIndex,
    })
    reset()
    onCreate()
  }

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
  }
}
