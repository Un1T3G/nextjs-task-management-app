// @ts-ignore
import { UilPlus } from '@iconscout/react-unicons'
import { IconButton, Input, Stack } from '@mui/joy'
import { useState } from 'react'

interface IProps {
  append: any
}

export const ColumnForm = ({ append }: IProps) => {
  const [value, setValue] = useState('')

  const handleOnClick = () => {
    append({ title: value })
    setValue('')
  }

  return (
    <Stack flexDirection="row">
      <Input
        placeholder="New column name"
        variant="soft"
        sx={{ flex: '1', mr: (theme) => theme.spacing(1) }}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <IconButton variant="soft" onClick={handleOnClick}>
        <UilPlus />
      </IconButton>
    </Stack>
  )
}
