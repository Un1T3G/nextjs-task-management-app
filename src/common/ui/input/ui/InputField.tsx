import tw from 'tailwind-styled-components'
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  useEffect,
} from 'react'
import { useInputContext } from '../model/InputProvider'

interface IProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'ref'
  > {}

export const InputField = forwardRef<HTMLInputElement, IProps>(
  ({ id, ...rest }, ref) => {
    const { setInputId } = useInputContext()

    useEffect(() => setInputId(id), [id])

    return <Wrapper ref={ref} id={id} {...rest} />
  }
)

InputField.displayName = 'InputField'

const Wrapper = tw.input`
text-gray-800
dark:text-white
w-full
px-2
py-1
rounded
border-[1px]
border-[#828fa3]
focus:outline-none
focus:border-indigo-500
placeholder:text-gray-600
bg-transparent
`
