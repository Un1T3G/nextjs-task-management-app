import {
  CreateTableDialog,
  DeleteTableDialog,
  UpdateTableDialog,
} from 'features/table'
import { PropsWithChildren } from 'react'

export const DialogsProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CreateTableDialog />
      <UpdateTableDialog />
      <DeleteTableDialog />
      {children}
    </>
  )
}
