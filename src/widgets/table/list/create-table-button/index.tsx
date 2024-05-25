//@ts-ignore
import { UilAngleRightB, UilPlus } from '@iconscout/react-unicons'
import {
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  styled,
} from '@mui/joy'
import { createTableDialogModel } from 'features/table'

import { useDialogApi } from 'shared/lib'

export const CreateTableButton = () => {
  const { toggleOpen } = useDialogApi(createTableDialogModel)

  return (
    <>
      <_ListItem>
        <_ListItemButton color="primary" onClick={toggleOpen}>
          <ListItemDecorator>
            <UilPlus />
          </ListItemDecorator>
          <ListItemContent>Create new table</ListItemContent>
          <UilAngleRightB />
        </_ListItemButton>
      </_ListItem>
    </>
  )
}

const _ListItem = styled(ListItem)(({ theme }) => ({}))

const _ListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}))
