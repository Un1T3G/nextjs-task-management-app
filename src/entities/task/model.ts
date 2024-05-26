import { createEvent, createStore } from 'effector'
import { ITaskOptions } from './types'

export const $openedTaskOptions = createStore<ITaskOptions | null>(null)

export const setOpenedTaskOptionsEvent = createEvent<ITaskOptions | null>()

$openedTaskOptions.on(setOpenedTaskOptionsEvent, (_, value) => value)
