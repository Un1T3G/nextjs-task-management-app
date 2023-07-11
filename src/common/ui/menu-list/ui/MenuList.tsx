import { useScrollLock } from '@/common/hooks/useScrollLock'
import { getElementCoordinate } from '@/common/utils'
import {
  useEffect,
  useRef,
  useState,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react'
import tw from 'tailwind-styled-components'
import { Portal } from '@/common/ui/portal'
import { Backdrop } from '../../backdrop'

interface IProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'style'
  > {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: VoidFunction
}

const SPACING = 8

const getElementAlignment = (listEl: HTMLElement, anchorEl: HTMLElement) => {
  const {
    top: at,
    left: al,
    bottom: ab,
    right: ar,
  } = getElementCoordinate(anchorEl)

  const { innerWidth: sx, innerHeight: sy } = window
  const { clientHeight: ly, clientWidth: lx } = listEl

  let position = { x: 0, y: 0 }

  if (ab + SPACING + ly < sy - SPACING) {
    position.y = ab + SPACING
  } else {
    position.y = at + SPACING + ly
  }

  if (ar + lx < sx / 2) {
    position.x = al
  } else {
    position.x = ar - lx
  }

  return position
}

export function MenuList({
  children,
  anchorEl,
  open,
  onClose,
  ...rest
}: IProps) {
  const [listRef, setListRef] = useState<HTMLDivElement | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isLocked, changeScrollState] = useScrollLock()

  useEffect(() => {
    //changeScrollState(open)
    //return () => changeScrollState(false)
  }, [open])

  useEffect(() => {
    const hasListRef = Boolean(listRef)

    if (hasListRef && !open) {
      changeScrollState(false)
    }
  }, [open, listRef])

  useEffect(() => {
    const listNode = listRef

    if (!listNode || !open || !anchorEl) {
      return
    }

    if (!isLocked) {
      changeScrollState(true)
    }

    setPosition(getElementAlignment(listNode, anchorEl))
  }, [listRef, open, anchorEl, isLocked])

  const { x, y } = position

  return open ? (
    <Portal>
      <Wrapper onClose={onClose}>
        <MenuListComponent
          ref={(e) => {
            setListRef(e)
          }}
          style={{
            top: `${y}px`,
            left: `${x}px`,
          }}
          {...rest}
        >
          {children}
        </MenuListComponent>
      </Wrapper>
    </Portal>
  ) : null
}

const Wrapper = tw(Backdrop)`
z-50
`
const MenuListComponent = tw.div`
fixed
p-1
rounded-md
drop-shadow-md
bg-[#f4f7fd]
dark:bg-[#20212c]
space-y-2
`
