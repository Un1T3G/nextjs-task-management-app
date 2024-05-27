import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  control: Control<any, any>
}

export const TitleField = ({ control }: IProps) => {
  return (
    <Controller
      name="title"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={{ mb: 1 }} error={!!error}>
          <FormLabel>Task name</FormLabel>
          <Input
            placeholder="Title..."
            variant="soft"
            color="neutral"
            {...field}
          />
          {error && <FormHelperText>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}
