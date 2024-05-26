import { Box, Stack, Typography } from '@mui/joy'
import { IColumn } from 'entities/column/types'
import { ITask } from 'entities/task'
import { ReactNode } from 'react'

interface IProps {
  column: IColumn
  renderTask: (task: ITask, index: number) => ReactNode
  onDrop?: any
  onDragOver?: any
}

export const ColumnCard = ({
  column,
  renderTask,
  onDrop,
  onDragOver,
}: IProps) => {
  return (
    <Box
      sx={{ flexShrink: 0, flexBasis: 280 }}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <Typography level="body-md" sx={{ mb: 1 }} fontWeight="bold">
        {`${column.title} (${column.tasks.length})`}
      </Typography>
      <Stack rowGap={2} sx={{ width: '100%' }}>
        {column.tasks.map((task, i) => renderTask(task, i))}
      </Stack>
    </Box>
  )
}
