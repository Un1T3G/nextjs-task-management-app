import { ColumnCard, IColumn } from 'entities/column'
import { TaskCard } from 'entities/task'
import { useColumnDragAndDrop } from '../model/use-column-drag-and-drop'

interface IProps {
  column: IColumn
  columnIndex: number
  onClickTaskCard: (taskIndex: number) => void
}

export const ColumnItem = ({
  column,
  columnIndex,
  onClickTaskCard,
}: IProps) => {
  const { onDragOver, onDragStart, onDrop } = useColumnDragAndDrop({
    columnIndex,
  })

  return (
    <ColumnCard
      column={column}
      renderTask={(task, i) =>
        task && (
          <TaskCard
            key={task.id}
            task={task}
            onDragStart={onDragStart(i)}
            draggable
            onClick={() => onClickTaskCard(i)}
          />
        )
      }
      onDrop={onDrop}
      onDragOver={onDragOver}
    />
  )
}
