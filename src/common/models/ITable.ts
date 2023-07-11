import { ITableColumn } from './ITableColumn'

export interface ITable {
  id: string
  title: string
  columns: ITableColumn[]
}
