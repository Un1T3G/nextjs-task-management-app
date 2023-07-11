import { ReactNode } from 'react'
import { InputProvider } from '../model/InputProvider'

interface IProps {
  children?: ReactNode
}

export function Input({ children }: IProps) {
  return <InputProvider>{children}</InputProvider>
}
