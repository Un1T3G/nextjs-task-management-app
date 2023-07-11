import { TextArea, TextAreaField, TextAreaLabel } from '@/common/ui/text-area'
import { ChangeEvent, Dispatch, SetStateAction, memo } from 'react'

interface IProps {
  description: string
  setDescription: Dispatch<SetStateAction<string>>
}

export const TaskDescriptionField = memo(
  ({ description, setDescription }: IProps) => {
    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value)
    }

    return (
      <TextArea>
        <TextAreaLabel>Description</TextAreaLabel>
        <TextAreaField
          id="task-description"
          style={{ resize: 'none' }}
          className="h-28 mb-5"
          value={description}
          onChange={handleOnChange}
        />
      </TextArea>
    )
  }
)

TaskDescriptionField.displayName = 'TaskDescriptionField'
