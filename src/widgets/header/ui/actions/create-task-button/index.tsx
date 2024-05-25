//@ts-ignore
import { UilPlus } from '@iconscout/react-unicons'
import { Button } from '@mui/joy'
import { createTableDialogModel } from 'features/table'

import { useDialogApi } from 'shared/lib'

export const CreateTaskButton = () => {
  const { toggleOpen } = useDialogApi(createTableDialogModel)

  return (
    <Button startDecorator={<UilPlus />} onClick={toggleOpen}>
      Create new task
    </Button>
  )
}
