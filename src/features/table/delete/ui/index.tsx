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
import { useDeleteTable } from '../model'

export const DeleteTableDialog = () => {
  const { open, toggleOpen, table, deleteTable } = useDeleteTable()

  if (!open) {
    return
  }

  return (
    <Modal open={open} onClose={toggleOpen}>
      <ModalDialog variant="outlined" role="alertdialog">
        <DialogTitle>
          <UilExclamationTriangle />
          Confirmation
        </DialogTitle>
        <Divider />
        <DialogContent>
          Are you sure you want to delete the &quot;{table.title}&quot; table?
          This action will remove all columns and tasks and cannot be reversed.
        </DialogContent>
        <DialogActions>
          <Button variant="solid" color="danger" onClick={deleteTable}>
            Delete
          </Button>
          <Button variant="plain" color="neutral" onClick={toggleOpen}>
            Cancel
          </Button>
        </DialogActions>
      </ModalDialog>
    </Modal>
  )
}
