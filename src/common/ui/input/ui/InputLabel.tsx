import tw from 'tailwind-styled-components'
import { DetailedHTMLProps, LabelHTMLAttributes } from 'react'
import { useInputContext } from '../model/InputProvider'

interface IProps
  extends Omit<
    DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>,
    'htmlFor'
  > {}

export function InputLabel(props: IProps) {
  const { inputId } = useInputContext()

  return <Wrapper htmlFor={inputId} {...props} />
}

const Wrapper = tw.label`
w-full
text-gray-800
dark:text-white
text-sm
mb-2
font-bold
`
