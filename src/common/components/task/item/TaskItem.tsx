import { ITask } from '@/common/models/ITask'
import tw from 'tailwind-styled-components'
import { DetailTaskModal } from '../detail'
import { ITableColumn } from '@/common/models/ITableColumn'
import { useMemo, useState, DragEvent } from 'react'
import { DRAG_TRANSFER_KEY } from '@/common/data/constants'

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  task: ITask
  columns: ITableColumn[]
}

export function TaskItem({
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  columns,
}: IProps) {
  const [open, setOpen] = useState(false)

  const subtasksLength = task.subtasks.length
  const subtaskCompletedLength = useMemo(
    () => task.subtasks.filter((x) => x.doing).length,
    [task.subtasks]
  )

  const subtitle = `${subtaskCompletedLength} of ${subtasksLength} subtasks`

  const handleOnClose = () => {
    setOpen(false)
  }

  const handleOnOpen = () => {
    setOpen(true)
  }

  const handleOnDragStart = (e: DragEvent<HTMLDivElement>) => {
    const text = JSON.stringify({
      taskIndex,
      columnIndex,
    })
    e.dataTransfer.setData(DRAG_TRANSFER_KEY, text)
  }

  return (
    <>
      <Wrapper
        onClick={handleOnOpen}
        onDragStart={handleOnDragStart}
        draggable={true}
      >
        <Title>{task.title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
      <DetailTaskModal
        open={open}
        onClose={handleOnClose}
        tableIndex={tableIndex}
        columnIndex={columnIndex}
        taskIndex={taskIndex}
        task={task}
        columns={columns}
      />
    </>
  )
}

const Wrapper = tw.div`
bg-white
dark:bg-[#2b2c37]
p-5
rounded-md
cursor-pointer
drop-shadow-md
`

const Title = tw.h3`
text-base
text-gray-800
dark:text-white
font-bold
mb-2
`

const Subtitle = tw.span`
text-[#828fa3]
text-sm
`
