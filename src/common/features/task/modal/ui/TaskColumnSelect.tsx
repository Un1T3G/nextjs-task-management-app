import { ITableColumn } from '@/common/models/ITableColumn'
import { Dispatch, SetStateAction, memo } from 'react'
import { Select, SelectOption } from '@/common/ui/select'

interface IProps {
  columns: ITableColumn[]
  selectedIndex: number
  setSelectedIndex: Dispatch<SetStateAction<number>>
}

export const TaskColumnSelect = memo(
  ({ columns, selectedIndex, setSelectedIndex }: IProps) => {
    const handleOnChange = (value: number) => {
      setSelectedIndex(value)
    }

    return (
      <Select value={selectedIndex} onChange={handleOnChange}>
        {columns.map((e, i) => (
          <SelectOption key={e.id} value={i}>
            {e.title}
          </SelectOption>
        ))}
      </Select>
    )
  }
)

TaskColumnSelect.displayName = 'TaskColumnSelect'
