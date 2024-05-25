//@ts-ignore
import { UilCheck, UilExclamationTriangle } from '@iconscout/react-unicons'
import { ModalClose, Snackbar } from '@mui/joy'
import { useEffect, useState } from 'react'

import { ISnackbarItem } from '../../types'

interface IProps {
  item: ISnackbarItem
  deleteSnackbar: (id: number) => void
}

const autoHideDuration = 750
const hideAnimationDuration = 100

export const SnackbarItem = ({ item, deleteSnackbar }: IProps) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => setOpen(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false)

      setTimeout(() => deleteSnackbar(item.id), hideAnimationDuration)
    }, autoHideDuration)

    return () => clearTimeout(timeout)
  }, [deleteSnackbar])

  const Icon = item.type === 'success' ? UilCheck : UilExclamationTriangle

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
      autoHideDuration={autoHideDuration}
      color={item.type}
      variant="soft"
      startDecorator={<Icon />}
      endDecorator={
        <ModalClose
          sx={{ position: 'static' }}
          variant="soft"
          size="sm"
          color={item.type}
        />
      }
    >
      {item.message}
    </Snackbar>
  )
}
