export interface IDropNewTaskEventProps {
  fromColumnIndex: number
  toColumnIndex: number
  tableIndex: number
  dropTaskIndex: number
}

export interface IChangeTaskColumnEventProps {
  fromColumnId: string
  newColumnId: string
  tableIndex: number
  taskIndex: number
}
