//@ts-ignore
import { UilEditAlt, UilEllipsisV, UilTrash } from '@iconscout/react-unicons'

import {
  MenuItem,
  MenuButton as _MenuButton,
  Menu,
  ListItemDecorator,
  IconButton,
  Dropdown,
} from '@mui/joy'

import { useDialogApi } from 'shared/lib'
import { useSelectedTable } from 'entities/table'
import { deleteTableDialogModel, updateTableDialogModel } from 'features/table'

export const MenuButton = () => {
  const { table } = useSelectedTable()

  const { toggleOpen: toggleOpenUpdateDialog } = useDialogApi(
    updateTableDialogModel
  )
  const { toggleOpen: toggleOpenDeleteDialog } = useDialogApi(
    deleteTableDialogModel
  )

  if (!table) {
    return
  }

  return (
    <Dropdown>
      <_MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
      >
        <UilEllipsisV />
      </_MenuButton>
      <Menu placement="bottom-end">
        <MenuItem onClick={toggleOpenUpdateDialog}>
          <ListItemDecorator>
            <UilEditAlt />
          </ListItemDecorator>
          Edit table
        </MenuItem>
        <MenuItem
          onClick={toggleOpenDeleteDialog}
          variant="soft"
          color="danger"
        >
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <UilTrash />
          </ListItemDecorator>
          Delete table
        </MenuItem>
      </Menu>
    </Dropdown>
  )
}
