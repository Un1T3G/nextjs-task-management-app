import tw from 'tailwind-styled-components'
import { useLayoutContext } from '../../model/LayoutProvider'
import { ReactNode, useEffect, useState } from 'react'
import { Menu } from './Menu'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import { bool2string, string2bool } from '@/common/utils'

interface IProps {
  children?: ReactNode
}

export function Header({ children }: IProps) {
  const { expanded } = useLayoutContext()

  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Wrapper $expanded={bool2string(expanded && mounted && isDesktop)}>
      {children}
      <Menu open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

interface IWrapperProps {
  $expanded: 'true' | 'false'
}

const Wrapper = tw.header<IWrapperProps>`
flex
items-center
justify-between
fixed
top-0
transition-none
md:transition-all
right-0
h-16
p-5
md:h-20
z-50
bg-white
dark:bg-[#2b2c37]
${({ $expanded }) => (string2bool($expanded) ? 'left-[256px]' : 'left-0')}
`
