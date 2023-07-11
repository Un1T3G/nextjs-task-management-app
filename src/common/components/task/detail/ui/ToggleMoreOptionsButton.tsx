import { Button } from '@/common/ui/button'
import { MenuList, MenuListItem } from '@/common/ui/menu-list'
import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { CiSquareMore } from 'react-icons/ci'
import { ITableColumn } from '@/common/models/ITableColumn'
import { ITask } from '@/common/models/ITask'
import { EditTaskModal, DeleteTaskModal } from '@/common/features/task'

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  task: ITask
  columns: ITableColumn[]
}

export function ToggleMoreOptionsButton({
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  columns,
}: IProps) {
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
          Edit task
        </MenuListItem>
        <MenuListItem onClick={handleOpenDeleteDialog} className="text-red-500">
          <RiDeleteBin5Line className="mr-2" />
          Delete task
        </MenuListItem>
      </MenuList>
      {openEditModal ? (
        <EditTaskModal
          open={openEditModal}
          onClose={handleCloseEditModal}
          tableIndex={tableIndex}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          task={task}
          columns={columns}
        />
      ) : null}
      {openDeleteDialog ? (
        <DeleteTaskModal
          open={openDeleteDialog}
          onClose={handleCloseDeleteDialog}
          tableIndex={tableIndex}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          taskTitle={task.title}
        />
      ) : null}
    </>
  )
}
