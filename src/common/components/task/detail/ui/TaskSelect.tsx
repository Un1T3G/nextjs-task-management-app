import { useAppDispatch } from '@/common/hooks/useRedux'
import { ITableColumn } from '@/common/models/ITableColumn'
import { mainActions } from '@/common/store/slices/main'
import { Select, SelectOption } from '@/common/ui/select'
import { useState } from 'react'

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  columns: ITableColumn[]
}

export function TaskSelect({
  tableIndex,
  columnIndex,
  taskIndex,
  columns,
}: IProps) {
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(columnIndex)

  const dispatch = useAppDispatch()

  const handleOnChange = (value: number) => {
    setSelectedColumnIndex(value)

    if (value !== columnIndex) {
      dispatch(
        mainActions.changeTaskColumn({
          tableIndex,
          oldColumnIndex: columnIndex,
          newColumnIndex: value,
          taskIndex,
        })
      )
    }
  }

  return (
    <Select value={selectedColumnIndex} onChange={handleOnChange}>
      {columns.map((e, i) => (
        <SelectOption key={e.id} value={i}>
          {e.title}
        </SelectOption>
      ))}
    </Select>
  )
}
