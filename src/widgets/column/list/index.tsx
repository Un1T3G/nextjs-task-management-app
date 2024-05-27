import { Stack } from '@mui/joy'
import { useUnit } from 'effector-react'
import { COLUMN_ITEM_WIDTH } from 'entities/column'
import { $selectedTable, $selectedTableIndex } from 'entities/table'
import { setOpenedTaskOptionsEvent } from 'entities/task'
import {
  $swipeIndex,
  ColumnItem,
  ColumnSwitcher,
  setListWidthEvent,
} from 'features/column'
import { useLayoutEffect, useRef } from 'react'

export const ColumnList = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [table, tableIndex, setOpenedTaskOptions, setListWidth, swipeIndex] =
    useUnit([
      $selectedTable,
      $selectedTableIndex,
      setOpenedTaskOptionsEvent,
      setListWidthEvent,
      $swipeIndex,
    ])

  useLayoutEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const onResize = () => {
      setListWidth(element.clientWidth)
    }
    onResize()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  if (!table) {
    return null
  }

  return (
    <>
      <ColumnSwitcher />
      <Stack
        ref={ref}
        flexDirection="row"
        columnGap={2}
        flexWrap="nowrap"
        sx={{ transition: 'transform 300ms ease' }}
        style={{
          transform: `translateX(${-swipeIndex * COLUMN_ITEM_WIDTH}px)`,
        }}
      >
        {table.columns.map((x, i) => (
          <ColumnItem
            key={x.id}
            column={x}
            columnIndex={i}
            onClickTaskCard={(taskIndex) => {
              setOpenedTaskOptions({
                tableIndex,
                columnIndex: i,
                taskIndex,
              })
            }}
          />
        ))}
      </Stack>
    </>
  )
}
