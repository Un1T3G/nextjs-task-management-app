import tw from 'tailwind-styled-components'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'

type TButtonType = 'none' | 'transparent' | 'primary' | 'secondary'
type TCornerType = 'none' | 'rounded-full' | 'rounded'

interface IButtonProps {
  button_type?: TButtonType
  corner_type?: TCornerType
}

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function Button(props: IProps & IButtonProps) {
  return <Wrapper {...props} />
}

const getButtonTheme = (buttonType: TButtonType) => {
  switch (buttonType) {
    case 'none':
      return ''
    case 'transparent':
      return 'bg-transparent hover:bg-white hover:bg-opacity-30'
    case 'primary':
      return 'text-white bg-indigo-500 hover:text-indigo-500 hover:bg-indigo-100'
    case 'secondary':
      return 'text-indigo-500 bg-white hover:bg-slate-100'
  }
}

const getButtonCorner = (cornerType: TCornerType) => {
  switch (cornerType) {
    case 'none':
      return ''
    case 'rounded-full':
      return 'rounded-full'
    case 'rounded':
      return 'rounded-md'
  }
}

const Wrapper = tw.button<IButtonProps>`
${({ button_type: buttonType }) => getButtonTheme(buttonType ?? 'primary')}
${({ corner_type: cornerType }) =>
  getButtonCorner(cornerType ?? 'rounded-full')}
py-2
px-3
font-bold
`
