import { useUnit } from 'effector-react'
import { PropsWithChildren } from 'react'

import { SnackbarItem } from './item'

import { $snackbar, deleteSnackbar } from '../model'

const SnackbarList = () => {
  const [snackbar, _deleteSnackbar] = useUnit([$snackbar, deleteSnackbar])

  return snackbar.map((x) => (
    <SnackbarItem key={x.id} item={x} deleteSnackbar={_deleteSnackbar} />
  ))
}

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <SnackbarList />
    </>
  )
}
