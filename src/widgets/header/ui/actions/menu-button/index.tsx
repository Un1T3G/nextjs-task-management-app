//@ts-ignore
import { UilEditAlt, UilEllipsisV, UilTrash } from '@iconscout/react-unicons'
import Dropdown from '@mui/joy/Dropdown'
import IconButton from '@mui/joy/IconButton'
import ListItemDecorator from '@mui/joy/ListItemDecorator'
import Menu from '@mui/joy/Menu'
import _MenuButton from '@mui/joy/MenuButton'
import MenuItem from '@mui/joy/MenuItem'

import * as React from 'react'

import { useDialogApi, useToggle } from 'shared/lib'
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
    <>
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
    </>
  )
}
