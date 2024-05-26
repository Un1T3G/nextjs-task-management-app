import { Stack } from '@mui/joy'
import { useUnit } from 'effector-react'
import { $selectedTable, $selectedTableIndex } from 'entities/table'
import { setOpenedTaskOptionsEvent } from 'entities/task'
import { ColumnItem } from 'features/column'

export const ColumnList = () => {
  const [table, tableIndex, setOpenedTaskOptions] = useUnit([
    $selectedTable,
    $selectedTableIndex,
    setOpenedTaskOptionsEvent,
  ])

  if (!table) {
    return null
  }

  return (
    <Stack
      flexDirection="row"
      columnGap={2}
      flexWrap="nowrap"
      sx={{ transition: 'transform 300ms ease' }}
    >
      {table.columns.map((x, i) => (
        <ColumnItem
          key={x.id}
          column={x}
          columnIndex={i}
          onClickTaskCard={(id, taskIndex) => {
            setOpenedTaskOptions({
              tableIndex,
              columnIndex: i,
              taskIndex,
            })
          }}
        />
      ))}
    </Stack>
  )
}
