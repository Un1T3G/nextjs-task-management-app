//@ts-ignore
import { UilExclamationTriangle } from '@iconscout/react-unicons'
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  ModalDialog,
} from '@mui/joy'
import { useDeleteTaskDialog, useTaskDelete } from '../model'

const Content = () => {
  const { task, deleteTable } = useTaskDelete()

  const { onClose } = useDeleteTaskDialog()

  return (
    <Modal open={true} onClose={onClose}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>
          <UilExclamationTriangle />
          Confirmation
        </DialogTitle>
        <Divider />
        <DialogContent>
          Are you sure you want to delete the &quot;{task?.title}&quot; task?
          This action will remove all todos and cannot be reversed.
        </DialogContent>
        <DialogActions>
          <Button variant="solid" color="danger" onClick={deleteTable}>
            Delete
          </Button>
          <Button variant="plain" color="neutral" onClick={onClose}>
            Cancel
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  )
}

export const DeleteTaskDialog = () => {
  const { open } = useDeleteTaskDialog()

  return open ? <Content /> : null
}
