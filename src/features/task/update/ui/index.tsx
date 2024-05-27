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

import { TitleField } from './title-field'

import { useSnackbar } from 'shared/ui'

import { useUpdateTaskDialog, useUpdateTaskForm } from '../model'
import { DescriptionField } from './description-field'
import { TodoForm } from './todo-form'
import { TodoField } from './todo-field'
import { ColumnSelect } from './column-select'

const Content = () => {
  const { showSnackbar } = useSnackbar()

  const { onClose } = useUpdateTaskDialog()

  const { control, onSubmit } = useUpdateTaskForm({
    onCreate: () => {
      showSnackbar({
        message: 'Task updated successfully',
        type: 'success',
      })
      onClose()
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'todos' as never,
  })

  return (
    <Modal open={true} onClose={onClose}>
      <ModalOverflow>
        <ModalDialog sx={{ maxWidth: '380px', width: '100%' }}>
          <form onSubmit={onSubmit}>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <DialogTitle>Update task</DialogTitle>
              <ModalClose sx={{ position: 'static' }} />
            </Stack>
            <TitleField control={control} />
            <DescriptionField control={control} />
            <Typography level="title-sm" sx={{ mb: 1 }}>
              Todos
            </Typography>
            <Stack spacing={1.1} mb={2}>
              {fields.map((item, index) => (
                <TodoField
                  key={item.id}
                  index={index}
                  control={control}
                  remove={remove}
                />
              ))}
              <TodoForm append={append} />
            </Stack>
            <ColumnSelect control={control} />
            <Button type="submit" sx={{ width: '100%' }}>
              Save changes
            </Button>
          </form>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  )
}

export const UpdateTaskDialog = () => {
  const { open } = useUpdateTaskDialog()

  return open ? <Content /> : null
}
