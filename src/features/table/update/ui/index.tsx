import {
  Button,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
  ModalOverflow,
  Stack,
  Typography,
} from '@mui/joy'
import { useFieldArray } from 'react-hook-form'

import { ColumnField } from './column-field'
import { ColumnForm } from './column-form'
import { TitleField } from './title-field'

import { useSnackbar } from 'shared/ui'

import { useDialogApi } from 'shared/lib'
import { updateTableDialogModel, useUpdateTableForm } from '../model'

const Content = () => {
  const { showSnackbar } = useSnackbar()

  const { open, toggleOpen } = useDialogApi(updateTableDialogModel)

  const { control, onSubmit } = useUpdateTableForm({
    onCreate: () => {
      showSnackbar({
        message: 'Table updated successfully',
        type: 'success',
      })
      toggleOpen()
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'columns' as never,
  })

  if (!open) {
    return
  }

  return (
    <Modal open={open} onClose={toggleOpen}>
      <ModalOverflow>
        <ModalDialog sx={{ maxWidth: '380px', width: '100%' }}>
          <form onSubmit={onSubmit}>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <DialogTitle>Update table</DialogTitle>
              <ModalClose sx={{ position: 'static' }} />
            </Stack>
            <TitleField control={control} />
            <Typography level="title-sm" sx={{ mb: 1 }}>
              Table columns
            </Typography>
            <Stack spacing={1.1} mb={2}>
              {fields.map((item, index) => (
                <ColumnField
                  key={item.id}
                  index={index}
                  control={control}
                  remove={remove}
                />
              ))}
              <ColumnForm append={append} />
            </Stack>
            <Button type="submit" sx={{ width: '100%' }}>
              Save changes
            </Button>
          </form>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  )
}

export const UpdateTableDialog = () => {
  const { open, toggleOpen } = useDialogApi(updateTableDialogModel)

  return open ? <Content /> : null
}
