import { useUnit } from 'effector-react'
import { $tables } from 'entities/table'
import { useMemo } from 'react'

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
}

export const useTask = ({ tableIndex, columnIndex, taskIndex }: IProps) => {
  const [tables] = useUnit([$tables])

  const task = useMemo(() => {
    return tables[tableIndex].columns[columnIndex].tasks[taskIndex]
  }, [tables, tableIndex, columnIndex, taskIndex])

  return { task }
}
