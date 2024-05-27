// @ts-ignore
import { UilPlus } from '@iconscout/react-unicons'
import { IconButton, Input, Stack } from '@mui/joy'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

interface IProps {
  append: any
}

export const TodoForm = ({ append }: IProps) => {
  const [value, setValue] = useState('')

  const handleOnClick = () => {
    append({
      id: uuid(),
      title: value,
      isNewTodo: true,
    })
    setValue('')
  }

  return (
    <Stack flexDirection="row">
      <Input
        placeholder="New todo"
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
