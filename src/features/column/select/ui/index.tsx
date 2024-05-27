import { Select, Option } from '@mui/joy'
import { useColumnSelect } from '../model'

interface IProps {
  tableIndex: number
  columnId: string
  taskIndex: number
}

export const ColumnSelect = ({ tableIndex, columnId, taskIndex }: IProps) => {
  const { options, onChange } = useColumnSelect({
    columnId,
    tableIndex,
    taskIndex,
  })

  return (
    <Select variant="soft" sx={{ mb: 2 }} value={columnId} onChange={onChange}>
      {options.map((x) => (
        <Option key={x.id} value={x.id}>
          {x.title}
        </Option>
      ))}
    </Select>
  )
}
