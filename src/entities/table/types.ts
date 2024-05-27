import { IColumn } from 'entities/column'

export interface ITable {
  id: string
  title: string
  columns: IColumn[]
}
