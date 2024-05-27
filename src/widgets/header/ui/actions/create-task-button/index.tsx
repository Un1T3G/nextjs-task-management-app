//@ts-ignore
import { UilPlus } from '@iconscout/react-unicons'
import { Button, IconButton } from '@mui/joy'

import { createTaskDialogModel } from 'features/task'

import { useDialogApi, useIsMobile } from 'shared/lib'

export const CreateTaskButton = () => {
  const { toggleOpen } = useDialogApi(createTaskDialogModel)

  const isMobile = useIsMobile()

  return isMobile ? (
    <IconButton onClick={toggleOpen} color="primary" variant="solid">
      <UilPlus />
    </IconButton>
  ) : (
    <Button startDecorator={<UilPlus />} onClick={toggleOpen}>
      <span>Create new task</span>
    </Button>
  )
}
