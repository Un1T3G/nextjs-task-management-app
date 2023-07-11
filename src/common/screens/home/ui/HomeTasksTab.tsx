import { TaskList } from '@/common/components/task/list'
import { ITable } from '@/common/models/ITable'
import {
  Header,
  LayoutContent,
  HeaderTitleNoSSR,
} from '@/common/components/layout'
import { AddNewTaskButton } from './AddNewTaskButton'
import { ToggleMoreOptionsButton } from './ToggleMoreOptionsButton'
import { useRef } from 'react'
import { ListScroll } from './ListScroll'

interface IProps {
  table: ITable
  tableIndex: number
}

export function HomeTasksTab({ table, tableIndex }: IProps) {
  const listRef = useRef<HTMLDivElement>(null)

  return (
    <LayoutContent className="max-w-[100vw]">
      <Header>
        <HeaderTitleNoSSR>{table.title}</HeaderTitleNoSSR>
        <div className="flex items-center">
          <AddNewTaskButton table={table} tableIndex={tableIndex} />
          <ToggleMoreOptionsButton table={table} tableIndex={tableIndex} />
        </div>
      </Header>
      <ListScroll listRef={listRef} />
      <div>
        <div className="overflow-hidden">
          <TaskList
            listRef={listRef}
            columns={table.columns}
            tableIndex={tableIndex}
          />
        </div>
      </div>
    </LayoutContent>
  )
}
