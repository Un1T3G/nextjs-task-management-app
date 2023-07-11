import tw from 'tailwind-styled-components'
import { DetailedHTMLProps, TextareaHTMLAttributes, useEffect } from 'react'
import { useTextAreaContext } from '../model/TextAreaProvider'

interface IProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {}

export function TextAreaField({ id, ...rest }: IProps) {
  const { setTextAreaId } = useTextAreaContext()

  useEffect(() => setTextAreaId(id), [id])

  return <Wrapper id={id} {...rest} />
}

const Wrapper = tw.textarea`
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
