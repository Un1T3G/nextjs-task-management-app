import { SubmitHandler, useForm } from 'react-hook-form'
import { ICreateTableFormState } from '../types'
import { createTableEvent } from './model'
import { useUnit } from 'effector-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { createTableFormSchema } from './schema'

interface IProps {
  onCreate: VoidFunction
}

export const useCreateTableForm = ({ onCreate }: IProps) => {
  const { control, handleSubmit, reset } = useForm<ICreateTableFormState>({
    defaultValues: {
      title: '', 
      columns: [{ title: 'Todo' }, { title: 'Doing' }, { title: 'Done' }],
    },
    resolver: yupResolver<ICreateTableFormState>(createTableFormSchema as any),
  })

  const [createTable] = useUnit([createTableEvent])

  const onSubmit: SubmitHandler<ICreateTableFormState> = (data) => {
    createTable({
      title: data.title,
      columnTitles: data.columns.map((x) => x.title),
    })
    reset()
    onCreate()
  }

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
  }
}
