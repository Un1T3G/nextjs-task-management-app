import { createEvent, createStore } from 'effector'

export const $isExpanded = createStore<boolean>(true)

export const toggleExpandedEvent = createEvent()

$isExpanded.on(toggleExpandedEvent, (value) => !value)
