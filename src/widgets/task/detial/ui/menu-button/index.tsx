//@ts-ignore
import { UilEditAlt, UilEllipsisV, UilTrash } from '@iconscout/react-unicons'

import {
  MenuButton as _MenuButton,
  Menu,
  MenuItem,
  IconButton,
  Dropdown,
  ListItemDecorator,
} from '@mui/joy'

import { useUnit } from 'effector-react'
import {
  setDeleteTaskOptionsEvent,
  setUpdateTaskOptionsEvent,
} from 'features/task'
import { ITask } from 'entities/task'

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  task: ITask
  onClose: VoidFunction
}

export const MenuButton = ({
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  onClose,
}: IProps) => {
  const [setUpdateTaskOptions, setDeleteTaskOptions] = useUnit([
    setUpdateTaskOptionsEvent,
    setDeleteTaskOptionsEvent,
  ])

  const handleOpenUpdateDialog = () => {
    setUpdateTaskOptions({
      tableIndex,
      columnIndex,
      taskIndex,
    })
  }

  const handleOpenDeleteDialog = () => {
    onClose()
    setDeleteTaskOptions({
      tableIndex,
      columnIndex,
      taskIndex,
    })
  }

  return (
    <Dropdown>
      <_MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
      >
        <UilEllipsisV />
      </_MenuButton>
      <Menu placement="bottom-end" sx={{ zIndex: 99999999 }}>
        <MenuItem onClick={handleOpenUpdateDialog}>
          <ListItemDecorator>
            <UilEditAlt />
          </ListItemDecorator>
          Edit task
        </MenuItem>
        <MenuItem
          onClick={handleOpenDeleteDialog}
          variant="soft"
          color="danger"
        >
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <UilTrash />
          </ListItemDecorator>
          Delete task
        </MenuItem>
      </Menu>
    </Dropdown>
  )
}
