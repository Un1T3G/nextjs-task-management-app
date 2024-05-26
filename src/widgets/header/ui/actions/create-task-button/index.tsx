//@ts-ignore
import { UilPlus } from '@iconscout/react-unicons'
import { Button } from '@mui/joy'

import { createTaskDialogModel } from 'features/task'

import { useDialogApi } from 'shared/lib'

export const CreateTaskButton = () => {
  const { toggleOpen } = useDialogApi(createTaskDialogModel)

  return (
    <Button startDecorator={<UilPlus />} onClick={toggleOpen}>
      Create new task
    </Button>
  )
}
