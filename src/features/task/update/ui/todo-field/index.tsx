// @ts-ignore
import { UilTrashAlt } from '@iconscout/react-unicons'
import { FormControl, FormHelperText, IconButton, Input, Stack } from '@mui/joy'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  index: number
  control: Control<any, any>
  remove: (index: number) => void
}

export const TodoField = ({ control, index, remove }: IProps) => {
  return (
    <Stack flexDirection="row" alignItems="flex-start">
      <Controller
        name={`todos.${index}.title`}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormControl
            error={!!error}
            sx={{ flex: '1', mr: (theme) => theme.spacing(0.8) }}
          >
            <Input variant="soft" placeholder="Todo name" {...field} />
            {error && <FormHelperText>{error?.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <IconButton variant="soft" onClick={() => remove(index)}>
        <UilTrashAlt />
      </IconButton>
    </Stack>
  )
}
