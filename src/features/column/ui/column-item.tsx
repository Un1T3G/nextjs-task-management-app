import { ColumnCard, IColumn } from 'entities/column'
import { TaskCard } from 'entities/task'

import { useColumn } from '../model'

interface IProps {
  column: IColumn
  columnIndex: number
  onClickTaskCard: (taskId: string, taskIndex: number) => void
}

export const ColumnItem = ({
  column,
  columnIndex,
  onClickTaskCard,
}: IProps) => {
  const { onDragOver, onDragStart, onDrop } = useColumn({ columnIndex })

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
            onClick={() => onClickTaskCard(task.id, i)}
          />
        )
      }
      onDrop={onDrop}
      onDragOver={onDragOver}
    />
  )
}
