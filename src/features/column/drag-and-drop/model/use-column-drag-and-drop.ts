import { useUnit } from 'effector-react'
import { DragEvent } from 'react'
import { DRAG_TRANSFER_KEY } from '../constants'
import { dropNewTaskOnColumnEvent } from './model'
import { $selectedTableIndex } from 'entities/table'

interface IProps {
  columnIndex: number
}

export const useColumnDragAndDrop = ({ columnIndex }: IProps) => {
  const handleOnDragStart = (index: number) => {
    return (e: DragEvent<HTMLDivElement>) => {
      const text = JSON.stringify({
        fromColumnIndex: columnIndex,
        dropTaskIndex: index,
      })
      e.dataTransfer.setData(DRAG_TRANSFER_KEY, text)
    }
  }

  const [tableIndex, dropNewTaskOnColumn] = useUnit([
    $selectedTableIndex,
    dropNewTaskOnColumnEvent,
  ])

  const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
    const data = e.dataTransfer.getData(DRAG_TRANSFER_KEY)

    if (!data) {
      return
    }

    const { fromColumnIndex, dropTaskIndex } = JSON.parse(data)

    if (fromColumnIndex === columnIndex) {
      return
    }

    dropNewTaskOnColumn({
      fromColumnIndex,
      toColumnIndex: columnIndex,
      tableIndex,
      dropTaskIndex,
    })
  }

  const handleOnDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return {
    onDrop: handleOnDrop,
    onDragOver: handleOnDragOver,
    onDragStart: handleOnDragStart,
  }
}
