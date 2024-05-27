import { Box, Stack, Typography } from '@mui/joy'
import { IColumn } from 'entities/column/types'
import { ITask } from 'entities/task'
import { ReactNode } from 'react'
import { COLUMN_ITEM_WIDTH } from './constants'

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
      sx={{ flexShrink: 0, flexBasis: COLUMN_ITEM_WIDTH }}
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

export { COLUMN_ITEM_WIDTH }
