import { createEvent } from 'effector'
import { $selectedTableIndex } from 'entities/table'

export const setSelectedTableIndexEvent = createEvent<number>()

$selectedTableIndex.on(setSelectedTableIndexEvent, (_, value) => value)
