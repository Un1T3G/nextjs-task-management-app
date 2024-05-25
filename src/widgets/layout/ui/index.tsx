import { styled } from '@mui/joy'

import { PropsWithChildren } from 'react'

import { useLayoutIsExpanded } from '../lib'
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE, Header } from 'widgets/header'
import { SIDEBAR_WIDTH, Sidebar } from 'widgets/sidebar'
import { MAIN_CONTENT_ID } from '../constants'
import { SidebarToggleButton } from './toggle-button'

export const RootLayout = ({ children }: PropsWithChildren) => {
  const { isExpanded } = useLayoutIsExpanded()

  return (
    <Root isExpanded={isExpanded}>
      <Header />
      <Sidebar />
      <SidebarToggleButton />
      <MainContent id={MAIN_CONTENT_ID}>{children}</MainContent>
    </Root>
  )
}

const Root = styled('div')<{ isExpanded: boolean }>(
  ({ theme, isExpanded }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: HEADER_HEIGHT,
    paddingLeft: isExpanded ? SIDEBAR_WIDTH : 0,
    [theme.breakpoints.down('md')]: {
      paddingTop: HEADER_HEIGHT_MOBILE,
      paddingLeft: 0,
    },
    overflowX: 'hidden',
  })
)

const MainContent = styled('main')(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  flexGrow: 1,
  padding: theme.spacing(3),
}))
