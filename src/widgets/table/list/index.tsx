//@ts-ignore
import { UilAngleRightB, UilFileAlt } from '@iconscout/react-unicons'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  styled,
} from '@mui/joy'

import { useTableList } from './model'
import { CreateTableButton } from './create-table-button'

interface IProps {
  className?: string
}

export const TableList = ({ className }: IProps) => {
  const { tables, isSelected, onClick } = useTableList()

  return (
    <List className={className}>
      {tables.map((x, i) => (
        <_ListItem key={x.id}>
          <_ListItemButton
            variant={isSelected(i) ? 'soft' : 'plain'}
            onClick={onClick(i)}
          >
            <ListItemDecorator>
              <UilFileAlt />
            </ListItemDecorator>
            <ListItemContent>{x.title}</ListItemContent>
            <UilAngleRightB />
          </_ListItemButton>
        </_ListItem>
      ))}
      <CreateTableButton />
    </List>
  )
}

const _ListItem = styled(ListItem)(({ theme }) => ({}))

const _ListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}))
