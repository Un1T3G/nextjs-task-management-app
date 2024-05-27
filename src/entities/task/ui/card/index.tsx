import { Card, LinearProgress, Typography } from '@mui/joy'
import { ITask } from 'entities/task'
import { getCompletedTaskCount } from './lib'

interface IProps {
  task: ITask
  onClick?: VoidFunction
  onDragStart?: (e: any) => void
  draggable?: boolean
}

export const TaskCard = ({ task, onClick, onDragStart, draggable }: IProps) => {
  const todoCount = task.todos.length
  const doneCount = getCompletedTaskCount(task)

  return (
    <Card
      onClick={onClick}
      onDragStart={onDragStart}
      draggable={draggable}
      role="button"
      sx={{ cursor: 'pointer' }}
    >
      <Typography level="title-lg">{task.title}</Typography>
      <Typography>{`${doneCount} of ${todoCount} todos`}</Typography>
      <LinearProgress
        determinate
        value={todoCount > 0 ? (doneCount / task.todos.length) * 100 : 0}
        thickness={8}
      />
    </Card>
  )
}
