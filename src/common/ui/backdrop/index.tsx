import { DetailedHTMLProps, HTMLAttributes } from 'react'
import tw from 'tailwind-styled-components'

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClose: VoidFunction
}

export function Backdrop({ onClose, children, ...rest }: IProps) {
  return (
    <Wrapper {...rest}>
      <BackdropComponent onClick={onClose} />
      {children}
    </Wrapper>
  )
}

const Wrapper = tw.div`
fixed
top-0
left-0
w-full
min-h-screen
`

const BackdropComponent = tw.div`
absolute
top-0
left-0
w-full
h-full
`
