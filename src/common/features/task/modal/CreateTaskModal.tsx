import { Modal, ModalTitle } from '@/common/ui/modal'
import tw from 'tailwind-styled-components'
import { FormEvent, useState } from 'react'
import { Button } from '@/common/ui/button'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { ISubtask } from '@/common/models/ISubtask'
import { mainActions } from '@/common/store/slices/main'
import { ITableColumn } from '@/common/models/ITableColumn'
import { TaskTitleField } from './ui/TaskTitleField'
import { TaskDescriptionField } from './ui/TaskDescriptionField'
import { TaskSubtasks } from './ui/TaskSubtasks'
import { TaskColumnSelect } from './ui/TaskColumnSelect'
import { v4 as uuid } from 'uuid'

interface IProps {
  open: boolean
  onClose: VoidFunction
  columns: ITableColumn[]
  tableIndex: number
}

export function CreateTaskModal({
  open,
  onClose: handleClose,
  columns,
  tableIndex,
}: IProps) {
  const modalProps = { open, onClose: handleClose }

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [subtasks, setSubtasks] = useState<ISubtask[]>([])
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(0)

  const dispatch = useAppDispatch()

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(
      mainActions.addTask({
        tableIndex,
        columnIndex: selectedColumnIndex,
        task: {
          id: uuid(),
          title,
          description,
          subtasks,
        },
      })
    )

    handleClose()
  }

  return (
    <Modal {...modalProps}>
      <form onSubmit={handleOnSubmit}>
        <ModalTitle className="mb-7">Add new task</ModalTitle>
        <TaskTitleField title={title} setTitle={setTitle} />
        <TaskDescriptionField
          description={description}
          setDescription={setDescription}
        />
        <TasksTitle>Sub tasks</TasksTitle>
        <TaskSubtasks subtasks={subtasks} setSubtasks={setSubtasks} />
        <TaskColumnSelect
          columns={columns}
          selectedIndex={selectedColumnIndex}
          setSelectedIndex={setSelectedColumnIndex}
        />
        <CreateButton type="submit" button_type="primary" className="mt-7">
          Create new task
        </CreateButton>
      </form>
    </Modal>
  )
}

const TasksTitle = tw.h3`
text-white
text-sm
font-bold
`

const CreateButton = tw(Button)`
flex
items-center
justify-center
w-full
`
