import { createEvent, createStore } from 'effector'

import { ISnackbarItem } from '../types'

export const $snackbar = createStore<ISnackbarItem[]>([])

export const addSnackbar = createEvent<Omit<ISnackbarItem, 'id'>>()

export const deleteSnackbar = createEvent<number>()

$snackbar
  .on(addSnackbar, (items, { message, type }) => [
    ...items,
    {
      id: Math.random(),
      message,
      type,
    },
  ])
  .on(deleteSnackbar, (items, id) => items.filter((x) => x.id !== id))
