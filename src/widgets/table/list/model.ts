import { useUnit } from 'effector-react'
import { $selectedTableIndex, $tables } from 'entities/table'
import { setSelectedTableIndexEvent } from 'features/table'

export const useTableList = () => {
  const [tables, selectedIndex, setSelectedIndex] = useUnit([
    $tables,
    $selectedTableIndex,
    setSelectedTableIndexEvent,
  ])

  const isSelected = (index: number) => {
    return selectedIndex === index
  }

  const handleOnClick = (index: number) => {
    return () => setSelectedTableIndexEvent(index)
  }

  return {
    tables,
    isSelected,
    onClick: handleOnClick,
  }
}
