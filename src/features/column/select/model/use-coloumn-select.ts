import { useUnit } from 'effector-react'
import { $selectedTable } from 'entities/table'
import { changeTaskColumnEvent } from './model'
import { useMemo } from 'react'

interface IProps {
  columnId: string
  tableIndex: number
  taskIndex: number
}

export const useColumnSelect = ({
  columnId,
  tableIndex,
  taskIndex,
}: IProps) => {
  const [table, changeTaskColumn] = useUnit([
    $selectedTable,
    changeTaskColumnEvent,
  ])

  const options = useMemo(() => {
    return table
      ? table.columns.map((x) => ({
          id: x.id,
          title: x.title,
        }))
      : []
  }, [table])

  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null
  ) => {
    if (!newValue) {
      return
    }

    changeTaskColumn({
      fromColumnId: columnId,
      newColumnId: newValue,
      tableIndex,
      taskIndex,
    })
  }

  return {
    options,
    onChange: handleChange,
  }
}
