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
import { useCreateTableForm } from '../model/use-table-form'
import { createTableDialogModel } from '../model'

import { useDialogApi } from 'shared/lib'

const Content = () => {
  const { showSnackbar } = useSnackbar()

  const { open, toggleOpen } = useDialogApi(createTableDialogModel)

  const { control, onSubmit } = useCreateTableForm({
    onCreate: () => {
      showSnackbar({
        message: 'Table created successfully',
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
              <DialogTitle>Add new table</DialogTitle>
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
              Create new table
            </Button>
          </form>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  )
}

export const CreateTableDialog = () => {
  const { open } = useDialogApi(createTableDialogModel)

  return open ? <Content /> : null
}
