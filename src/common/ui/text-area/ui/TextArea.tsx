import { ReactNode } from 'react'
import { TextAreaProvider } from '../model/TextAreaProvider'

interface IProps {
  children?: ReactNode
}

export function TextArea({ children }: IProps) {
  return <TextAreaProvider>{children}</TextAreaProvider>
}
