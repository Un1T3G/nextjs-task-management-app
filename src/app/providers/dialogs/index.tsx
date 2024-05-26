import {
  CreateTableDialog,
  DeleteTableDialog,
  UpdateTableDialog,
} from 'features/table'
import {
  CreateTaskDialog,
  DeleteTaskDialog,
  UpdateTaskDialog,
} from 'features/task'
import { PropsWithChildren } from 'react'
import { ViewTaskDetail } from 'widgets/task'

export const DialogsProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CreateTableDialog />
      <UpdateTableDialog />
      <DeleteTableDialog />
      <CreateTaskDialog />
      <UpdateTaskDialog />
      <DeleteTaskDialog />
      <ViewTaskDetail />
      {children}
    </>
  )
}
