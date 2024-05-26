import {
  FormControl,
  FormHelperText,
  FormLabel,
  Option,
  Select,
} from '@mui/joy'
import { useUnit } from 'effector-react'
import { $selectedTable } from 'entities/table'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  control: Control<any, any>
}

export const ColumnSelect = ({ control }: IProps) => {
  const table = useUnit($selectedTable)

  if (!table) {
    return null
  }

  return (
    <Controller
      name="columnId"
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        const handleOnChange = (e: any, value: any) => {
          onChange(value)
        }

        return (
          <FormControl sx={{ mb: 1 }} error={!!error}>
            <FormLabel>Column</FormLabel>
            <Select
              variant="soft"
              sx={{ mb: 2 }}
              placeholder="Select column"
              value={value}
              onChange={handleOnChange}
            >
              {table.columns.map((x) => (
                <Option key={x.id} value={x.id}>
                  {x.title}
                </Option>
              ))}
            </Select>
            {error && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        )
      }}
    />
  )
}
