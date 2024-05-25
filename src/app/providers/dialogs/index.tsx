import { CreateTableDialog, DeleteTableDialog } from 'features/table'
import { PropsWithChildren } from 'react'

export const DialogsProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <CreateTableDialog />
      <DeleteTableDialog />
      {children}
    </>
  )
}
