import { combine, createStore } from 'effector'
import { ITable } from './types'

export const $tables = createStore<ITable[]>([])
export const $selectedTableIndex = createStore<number>(-1)
export const $selectedTable = combine(
  $tables,
  $selectedTableIndex,
  (tables, index) => (tables[index] ? tables[index] : null)
)
