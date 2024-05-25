export interface ICreateTableEventProps {
  title: string
  columnTitles: string[]
}

export interface ICreateTableFormState {
  title: string
  columns: {
    id: number
    title: string
  }[]
}
