import {
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
  ModalOverflow,
  Stack,
  Typography,
} from '@mui/joy'

import { TodoItem } from 'entities/todo'
import { ColumnSelect } from 'features/column'
import { ToggleTodo } from 'features/todo'
import { MenuButton } from './menu-button'

import { useTaskDetail } from '../model'

export const ViewTaskDetail = () => {
  const { open, onClose, task, openedTaskOptions } = useTaskDetail()

  if (!open || !task) {
    return null
  }

  const { tableIndex, columnIndex, taskIndex } = openedTaskOptions!

  return (
    <Modal open={open} onClose={onClose}>
      <ModalOverflow>
        <ModalDialog sx={{ maxWidth: '380px', width: '100%' }}>
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 1 }}
          >
            <DialogTitle>{task!.title}</DialogTitle>
            <Stack flexDirection="row" columnGap={0.5}>
              <MenuButton
                tableIndex={tableIndex}
                columnIndex={columnIndex}
                taskIndex={taskIndex}
                task={task!}
                onClose={onClose}
              />
              <ModalClose sx={{ position: 'static' }} />
            </Stack>
          </Stack>
          <Typography level="title-sm" sx={{ mb: 1 }}>
            {task!.description}
          </Typography>
          <Stack spacing={1.1} mb={1}>
            {task!.todos.map((item, index) => (
              <TodoItem
                key={item.id}
                startDecorator={
                  <ToggleTodo
                    tableIndex={tableIndex}
                    columnIndex={columnIndex}
                    taskIndex={taskIndex}
                    todoIndex={index}
                    todo={item}
                  />
                }
                todo={item}
              />
            ))}
          </Stack>
          <ColumnSelect
            tableIndex={tableIndex}
            columnId={task.columnId}
            taskIndex={taskIndex}
          />
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  )
}
