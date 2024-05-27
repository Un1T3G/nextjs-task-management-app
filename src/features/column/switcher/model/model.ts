import { combine, createEvent, createStore } from 'effector'
import { COLUMN_ITEM_WIDTH } from 'entities/column'
import { $selectedTable } from 'entities/table'

export const $listViewportWidth = createStore<number>(0)
export const $swipeIndex = createStore<number>(0)
export const $canSwipeLeft = $swipeIndex.map((x) => x > 0)
export const $canSwipeRight = combine(
  $listViewportWidth,
  $swipeIndex,
  $selectedTable,
  (listViewportWidth, swipeIndex, table) => {
    if (!table) {
      return false
    }

    const spacing = 16
    const listWidth =
      table.columns.length * COLUMN_ITEM_WIDTH +
      (table.columns.length - 1) * spacing

    return (
      listWidth - (COLUMN_ITEM_WIDTH + spacing) * swipeIndex > listViewportWidth
    )
  }
)

export const setListWidthEvent = createEvent<number>()
export const swipeLeftEvent = createEvent()
export const swipeRightEvent = createEvent()

$listViewportWidth.on(setListWidthEvent, (_, value) => value)
$swipeIndex
  .on(swipeLeftEvent, (value) => value - 1)
  .on(swipeRightEvent, (value) => value + 1)
