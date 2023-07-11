import { ITableColumn } from '@/common/models/ITableColumn'
import { v4 as uuid } from 'uuid'

export const DEFAULT_COLUMNS_VALUES: ITableColumn[] = [
  {
    id: uuid(),
    title: 'Todo',
    tasks: [],
  },
  {
    id: uuid(),
    title: 'Doing',
    tasks: [],
  },
  {
    id: uuid(),
    title: 'Completed',
    tasks: [],
  },
]

export const DRAG_TRANSFER_KEY = 'task'
