export interface IUpdateTableEventProps {
  title: string
  columns: {
    id: string
    title: string
    isNewColumn?: boolean
  }[]
  tableIndex: number
}

export interface IUpdateTableFormState {
  title: string
  columns: {
    id: string
    title: string
    isNewColumn?: boolean
  }[]
}
