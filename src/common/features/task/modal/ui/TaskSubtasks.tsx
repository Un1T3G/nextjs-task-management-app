import { FieldArray } from '@/common/components/field-array'
import { ISubtask } from '@/common/models/ISubtask'
import { Dispatch, SetStateAction, memo } from 'react'
import { v4 as uuid } from 'uuid'

interface IProps {
  subtasks: ISubtask[]
  setSubtasks: Dispatch<SetStateAction<ISubtask[]>>
}

export const TaskSubtasks = memo(({ subtasks, setSubtasks }: IProps) => {
  const handleAddSubtask = (value: string) => {
    const newSubtask = {
      id: uuid(),
      title: value,
      doing: false,
    }

    setSubtasks([...subtasks, newSubtask])
  }

  const handleRemoveSubtask = (index: number) => {
    const newSubtasks = subtasks.filter((_, i) => i !== index)
    setSubtasks(newSubtasks)
  }

  return (
    <div className="mb-7">
      <FieldArray
        values={subtasks}
        setValues={setSubtasks}
        titleSelector="title"
        addValue={handleAddSubtask}
        removeValue={handleRemoveSubtask}
      />
    </div>
  )
})

TaskSubtasks.displayName = 'TaskSubtasks'