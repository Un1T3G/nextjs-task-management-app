import { Stack } from '@mui/joy'

import { CreateTaskButton } from './create-task-button'
import { MenuButton } from './menu-button'
import { useSelectedTable } from 'entities/table'

export const HeaderActions = () => {
  const { table } = useSelectedTable()

  if (!table) {
    return
  }

  return (
    <Stack flexDirection="row" columnGap={1}>
      <CreateTaskButton />
      <MenuButton />
    </Stack>
  )
}
