import { createEvent, createStore } from 'effector'
import { useUnit } from 'effector-react'

export const createDialogApi = () => {
  const $open = createStore(false)

  const toggleOpenEvent = createEvent()

  $open.on(toggleOpenEvent, (value) => !value)

  return {
    $open,
    toggleOpenEvent,
  }
}

export const useDialogApi = (api: ReturnType<typeof createDialogApi>) => {
  const [open, toggleOpen] = useUnit([api.$open, api.toggleOpenEvent])

  return {
    open,
    toggleOpen,
  }
}
