import { Input, InputLabel, InputField } from '@/common/ui/input'
import { ChangeEvent, Dispatch, SetStateAction, memo } from 'react'

interface IProps {
  title: string
  setTitle: Dispatch<SetStateAction<string>>
}

export const TaskTitleField = memo(({ title, setTitle }: IProps) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <Input>
      <InputLabel>Board name</InputLabel>
      <InputField
        id="board-name"
        type="text"
        className="mb-5"
        value={title}
        onChange={handleOnChange}
      />
    </Input>
  )
})

TaskTitleField.displayName = 'TaskTitleField'
