import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { Portal } from '../portal'
import { Backdrop } from '../backdrop'

interface IProps {
  open: boolean
  onClose: VoidFunction
  children?: ReactNode | ((props: { onClose: VoidFunction }) => ReactNode)
}

function WrappedComponent({ onClose, children }: Omit<IProps, 'open'>) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  const handleClose = () => {
    onClose()
    document.body.style.overflow = ''
  }

  return (
    <Portal>
      <Wrapper onClose={handleClose}>
        <ModalWrapper>
          {typeof children === 'function'
            ? children({ onClose: handleClose })
            : children}
        </ModalWrapper>
      </Wrapper>
    </Portal>
  )
}

export function Modal({ open, children, ...rest }: IProps) {
  if (!open) {
    return null
  }

  return <WrappedComponent {...rest}>{children}</WrappedComponent>
}

interface IModalTitleProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export function ModalTitle({ children, ...rest }: IModalTitleProps) {
  return <Title {...rest}>{children}</Title>
}

const Wrapper = tw(Backdrop)`
flex
items-center
justify-center
z-50
bg-black/60
`

const ModalWrapper = tw.div`
relative
p-7
max-w-[416px]
w-full
max-h-[90vh]
overflow-y-auto
rounded-md
bg-white
dark:bg-[#2b2c37]
z-50
shadow-lg
dark:shadow-[#454757]/50
`

const Title = tw.h2`
text-gray-800
dark:text-white
text-2xl
font-bold
`
