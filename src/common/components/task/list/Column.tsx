import { ITableColumn } from '@/common/models/ITableColumn'
import tw from 'tailwind-styled-components'
import { TaskItem } from '../item/TaskItem'
import { DragEvent } from 'react'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { mainActions } from '@/common/store/slices/main'
import { DRAG_TRANSFER_KEY } from '@/common/data/constants'

interface IProps {
  column: ITableColumn
  columns: ITableColumn[]
  tableIndex: number
  columnIndex: number
}

export function Column({ column, columns, tableIndex, columnIndex }: IProps) {
  const { title, tasks } = column

  const dispatch = useAppDispatch()

  const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
    const { columnIndex: prevColumnIndex, taskIndex: dropTaskIndex } =
      JSON.parse(e.dataTransfer.getData(DRAG_TRANSFER_KEY))

    if (prevColumnIndex !== columnIndex) {
      dispatch(
        mainActions.changeTaskColumn({
          newColumnIndex: columnIndex,
          oldColumnIndex: prevColumnIndex,
          tableIndex,
          taskIndex: dropTaskIndex,
        })
      )
    }
  }

  const handleOnDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <Wrapper onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
      <Title>{`${title} (${tasks.length})`}</Title>
      {tasks.map((task, taskIndex) => (
        <TaskItem
          key={task.id}
          tableIndex={tableIndex}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          task={task}
          columns={columns}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = tw.div`
space-y-5
basis-[280px]
shrink-0
`

const Title = tw.h4`
text-[15px]
text-[#828fa3]
font-bold
mb-4
`
