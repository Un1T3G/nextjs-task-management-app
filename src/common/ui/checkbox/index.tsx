import tw from 'tailwind-styled-components'
import { FaCheck } from 'react-icons/fa'

interface IProps {
  id?: string
  value: boolean
  onChange: (value: boolean) => void
  className?: string
}

export function Checkbox({ id, value, onChange, className }: IProps) {
  const handleOnClick = () => {
    onChange(!value)
  }

  return (
    <Wrapper
      id={id}
      is_active={value + ''}
      className={className}
      onClick={handleOnClick}
    >
      <input className="hidden" value={value.toString()} type="checkbox" />
      {value && <FaCheck />}
    </Wrapper>
  )
}

interface IWrappedProps {
  is_active?: string
}

const Wrapper = tw.div<IWrappedProps>`
flex
items-center
justify-center
text-white
text-xs
border-[1px]
w-4
h-4
${({ is_active }) =>
  is_active ? 'bg-indigo-500 border-indigo-400' : 'bg-white border-gray-300'}
`
