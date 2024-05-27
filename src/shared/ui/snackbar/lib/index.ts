import { useUnit } from 'effector-react'

import { addSnackbar } from '../model'

export const useSnackbar = () => {
  const showSnackbar = useUnit(addSnackbar)

  return { showSnackbar }
}
