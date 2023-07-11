import { ITableColumn } from '@/common/models/ITableColumn'
import tw from 'tailwind-styled-components'
import { Column } from './Column'
import { RefObject } from 'react'

interface IProps {
  listRef: RefObject<HTMLDivElement>
  columns: ITableColumn[]
  tableIndex: number
}

export function TaskList({ listRef, columns, tableIndex }: IProps) {
  return (
    <Wrapper ref={listRef}>
      {columns.map((column, columnIndex) => (
        <Column
          key={column.id}
          column={column}
          columns={columns}
          tableIndex={tableIndex}
          columnIndex={columnIndex}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex
flex-nowrap
space-x-5
transition-transform
`
