import { Portal } from '../portal'
import { Backdrop } from '../backdrop'
import tw from 'tailwind-styled-components'
import { Button } from '../button'

interface IProps {
  title: string
  subtitle: string
  confirmText: string
  cancelText: string
  open: boolean
  onClose: VoidFunction
  onConfirm?: VoidFunction
  onCancel?: VoidFunction
}

export function Dialog({
  open,
  onClose,
  title,
  subtitle,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: IProps) {
  return (
    open && (
      <Portal>
        <Wrapper onClose={onClose}>
          <Modal>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <ActionsRow>
              <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
              <CancelButton onClick={onCancel ?? onClose}>
                {cancelText}
              </CancelButton>
            </ActionsRow>
          </Modal>
        </Wrapper>
      </Portal>
    )
  )
}

const Wrapper = tw(Backdrop)`
fixed
top-0
left-0
w-full
min-h-screen
flex
items-center
justify-center
z-50
bg-black/60
`

const Modal = tw.div`
relative
p-7
bg-[#f4f7fd]
dark:bg-[#2b2c37]
max-w-sm
dark:shadow-lg
rounded-md
dark:shadow-[#454757]/50
`

const Title = tw.h2`
text-xl
text-red-500
mb-5
`

const Subtitle = tw.p`
text-gray-600
text-sm
mb-5
`

const ActionsRow = tw.div`
flex
justify-between
`

const ConfirmButton = tw(Button)`
text-white
bg-red-500
px-5
`

const CancelButton = tw(Button)`
text-indigo-500
bg-indigo-500/20
px-5
`
