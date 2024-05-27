export interface ISnackbarItem {
  id: number
  message: string
  type: SnackbarType
}

export type SnackbarType = 'danger' | 'success'
