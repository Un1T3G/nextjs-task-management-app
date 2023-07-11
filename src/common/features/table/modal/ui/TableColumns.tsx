import { FieldArray } from '@/common/components/field-array'
import { ITableColumn } from '@/common/models/ITableColumn'
import { Dispatch, SetStateAction, memo } from 'react'
import { v4 as uuid } from 'uuid'

interface IProps {
  columns: ITableColumn[]
  setColumns: Dispatch<SetStateAction<ITableColumn[]>>
}

export const TableColumns = memo(({ columns, setColumns }: IProps) => {
  const handleAddColumn = (title: string) => {
    const newColumn = {
      id: uuid(),
      title,
      tasks: [],
    }

    setColumns([...columns, newColumn])
  }

  const handleRemoveColumn = (index: number) => {
    const newColumns = columns.filter((_, i) => i !== index)
    console.log(newColumns)
    setColumns([...newColumns])
  }

  return (
    <FieldArray
      values={columns}
      setValues={setColumns}
      titleSelector="title"
      addValue={handleAddColumn}
      removeValue={handleRemoveColumn}
    />
  )
})

TableColumns.displayName = 'TableColumns'
