import { Button, Modal, ModalDialog, ModalOverflow, Stack } from '@mui/joy'

import { useFieldArray } from 'react-hook-form'

import { ColumnSelect } from './column-select'
import { DescriptionField } from './description-field'
import { TitleField } from './title-field'
import { TodoField } from './todo-field'
import { TodoForm } from './todo-form'
import { createTaskDialogModel, useCreateTaskForm } from '../model'
import { useSnackbar } from 'shared/ui'
import { useDialogApi } from 'shared/lib'

const Content = () => {
  const { open, toggleOpen } = useDialogApi(createTaskDialogModel)

  const { showSnackbar } = useSnackbar()

  const { control, onSubmit } = useCreateTaskForm({
    onCreate: () => {
      showSnackbar({
        type: 'success',
        message: 'Task created successfully',
      })
      toggleOpen()
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'todos' as never,
  })

  return (
    <Modal open={open} onClose={toggleOpen}>
      <ModalOverflow>
        <ModalDialog sx={{ maxWidth: '380px', width: '100%' }}>
          <form onSubmit={onSubmit}>
            <TitleField control={control} />
            <DescriptionField control={control} />
            <Stack spacing={1.1} mb={1.5}>
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
              Create new task
            </Button>
          </form>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  )
}

export const CreateTaskDialog = () => {
  const { open } = useDialogApi(createTaskDialogModel)

  return open ? <Content /> : null
}
