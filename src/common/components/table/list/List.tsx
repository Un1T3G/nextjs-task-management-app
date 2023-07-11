import tw from 'tailwind-styled-components'
import { TableListItem } from './ListItem'
import { useAppDispatch, useAppSelector } from '@/common/hooks/useRedux'
import { mainActions } from '@/common/store/slices/main'

export function TableList() {
  const { tables, selectedTableIndex } = useAppSelector((x) => x.mainSlice)
  const dispatch = useAppDispatch()

  const handleOnSelect = (index: number) => () => {
    dispatch(mainActions.updateSelectedTableIndex({ tableIndex: index }))
  }

  const titleContent: Record<number, string> = {
    1: `All board (${tables.length})`,
    0: 'Empty list',
  }

  return (
    <>
      <Title>{titleContent[Number(tables.length > 0)]}</Title>
      <List>
        {tables.map((e, i) => {
          const isActive = selectedTableIndex === i

          return (
            <TableListItem
              key={e.id}
              table={e}
              isActive={isActive}
              onClick={handleOnSelect(i)}
            />
          )
        })}
      </List>
    </>
  )
}

const Title = tw.h3`
text-base
text-[#828fa3]
px-5
mb-2
`

const List = tw.div`
pr-7
`
