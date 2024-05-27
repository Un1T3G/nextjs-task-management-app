import { FormControl, FormHelperText, FormLabel, Textarea } from '@mui/joy'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  control: Control<any, any>
}

export const DescriptionField = ({ control }: IProps) => {
  return (
    <Controller
      name="description"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={{ mb: 1 }} error={!!error}>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Description..."
            variant="soft"
            color="neutral"
            minRows={5}
            {...field}
          />
          {error && <FormHelperText>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  )
}
