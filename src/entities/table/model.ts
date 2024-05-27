import { combine, createStore } from 'effector'
import { ITable } from './types'
import data from 'shared/assets/data.json'
import { persist } from 'effector-storage/local'

export const $tables = createStore<ITable[]>(data, { name: '@tables' })
export const $selectedTableIndex = createStore<number>(-1)
export const $selectedTable = combine(
  $tables,
  $selectedTableIndex,
  (tables, index) => (tables[index] ? tables[index] : null)
)

persist({ store: $tables })
