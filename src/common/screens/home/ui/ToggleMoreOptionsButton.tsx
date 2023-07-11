import { Button } from '@/common/ui/button'
import { MenuList, MenuListItem } from '@/common/ui/menu-list'
import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { CiSquareMore } from 'react-icons/ci'
import { EditTableModal, DeleteTableModal } from '@/common/features/table'
import { ITable } from '@/common/models/ITable'

interface IProps {
  table: ITable
  tableIndex: number
}

export function ToggleMoreOptionsButton({ table, tableIndex }: IProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCloseEditModal = () => {
    setOpenEditModal(false)
  }

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false)
  }

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true)
    handleClose()
  }

  const handleOpeEditModal = () => {
    setOpenEditModal(true)
    handleClose()
  }

  return (
    <>
      <Button
        className="text-gray-800 dark:text-white text-2xl p-1 ml-2 bg-black/10 dark:bg-white/10"
        button_type="none"
        corner_type="rounded"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <CiSquareMore />
      </Button>
      <MenuList anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuListItem onClick={handleOpeEditModal}>
          <BiEdit className="mr-2" />
          Edit table
        </MenuListItem>
        <MenuListItem onClick={handleOpenDeleteDialog} className="text-red-500">
          <RiDeleteBin5Line className="mr-2" />
          Delete table
        </MenuListItem>
      </MenuList>
      {openEditModal ? (
        <EditTableModal
          open={openEditModal}
          onClose={handleCloseEditModal}
          table={table}
          tableIndex={tableIndex}
        />
      ) : null}
      {openDeleteDialog ? (
        <DeleteTableModal
          open={openDeleteDialog}
          onClose={handleCloseDeleteDialog}
          tableIndex={tableIndex}
        />
      ) : null}
    </>
  )
}
