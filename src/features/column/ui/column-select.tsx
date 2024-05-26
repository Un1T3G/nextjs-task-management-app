import { useUnit } from 'effector-react'
import { $selectedTable } from 'entities/table'
import { useMemo } from 'react'
import { changeTaskColumnEvent } from '../model/model'
import { Select, Option } from '@mui/joy'

interface IProps {
  tableIndex: number
  columnId: string
  taskIndex: number
}

export const ColumnSelect = ({ tableIndex, columnId, taskIndex }: IProps) => {
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

  return (
    <Select
      variant="soft"
      sx={{ mb: 2 }}
      value={columnId}
      onChange={handleChange}
    >
      {options.map((x) => (
        <Option key={x.id} value={x.id}>
          {x.title}
        </Option>
      ))}
    </Select>
  )
}
