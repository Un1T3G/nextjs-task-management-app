import { ReactNode, memo, useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { Sidebar } from './ui/sidebar'
import { LayoutProvider, useLayoutContext } from './model/LayoutProvider'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import { bool2string, string2bool } from '@/common/utils'

interface IProps {
  children?: ReactNode
}

function WrappedComponent({ children }: IProps) {
  const [mounted, setMounted] = useState(false)
  const { expanded } = useLayoutContext()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Wrapper $expanded={bool2string(expanded && isDesktop && mounted)}>
      <Sidebar expanded={expanded} isDesktop={isDesktop} />
      <Content>{children}</Content>
    </Wrapper>
  )
}

export function Layout(props: IProps) {
  return (
    <LayoutProvider>
      <WrappedComponent {...props} />
    </LayoutProvider>
  )
}

interface IWrapperProps {
  $expanded: 'true' | 'false'
}

const Wrapper = tw.div<IWrapperProps>`
flex
flex-row
min-h-screen
items-stretch
ml-[256px]
pt-16
md:pt-20
bg-[#f4f7fd]
dark:bg-[#20212c]
transition-none
md:transition-[margin]
${({ $expanded }) => (string2bool($expanded) ? 'ml-[256px]' : 'ml-0')}
`
/*

*/

const Content = memo(tw.div`
flex-1
flex
flex-col
items-stretch
`)

export const LayoutContent = tw.main`
flex-1
p-6
`
