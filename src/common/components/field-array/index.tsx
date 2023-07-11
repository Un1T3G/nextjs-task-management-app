import { Button } from '@/common/ui/button'
import { Input, InputField } from '@/common/ui/input'
import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { AiOutlineCloseSquare, AiOutlinePlusSquare } from 'react-icons/ai'
import tw from 'tailwind-styled-components'

interface IItem {
  id: string
  [key: string]: any
}

interface IProps<T extends IItem, K extends keyof T> {
  values: T[]
  setValues: Dispatch<SetStateAction<T[]>>
  titleSelector: K
  addValue: (value: string) => void
  removeValue: (index: number) => void
}

export function FieldArray<T extends IItem, K extends keyof T>({
  values,
  setValues,
  titleSelector,
  addValue,
  removeValue,
}: IProps<T, K>) {
  const handleOnChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newValues = [...values]
      newValues[index] = {
        ...newValues[index],
        [titleSelector]: e.target.value,
      } as T

      setValues(newValues)
    }

  const handleRemoveItem = (index: number) => () => {
    removeValue(index)
  }

  return (
    <Wrapper>
      {values.map((e, i) => (
        <div key={e.id} className="flex">
          <Input>
            <InputField value={e.title} onChange={handleOnChange(i)} />
          </Input>
          <ActionButton
            type="button"
            button_type="none"
            corner_type="rounded"
            onClick={handleRemoveItem(i)}
          >
            <AiOutlineCloseSquare className="text-indigo-500 text-xl" />
          </ActionButton>
        </div>
      ))}
      <AddColumnField addColumn={addValue} />
    </Wrapper>
  )
}

const AddColumnField = ({
  addColumn,
}: {
  addColumn: (value: string) => void
}) => {
  const [title, setTitle] = useState('')

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleAddItem = () => {
    addColumn(title)
    setTitle('')
  }

  return (
    <div className="flex">
      <Input>
        <InputField value={title} onChange={handleOnChange} />
      </Input>
      <ActionButton
        type="button"
        button_type="none"
        corner_type="rounded"
        onClick={handleAddItem}
      >
        <AiOutlinePlusSquare className="text-indigo-500 text-xl" />
      </ActionButton>
    </div>
  )
}

const Wrapper = tw.div`
space-y-2
`

const ActionButton = tw(Button)`
flex
items-center
justify-center
p-1
ml-2
bg-black/10
hover:bg-black/20
dark:bg-white/10
dark:hover:bg-opacity-20
w-[34px]
h-[34px]
`
