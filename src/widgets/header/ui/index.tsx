import { styled } from '@mui/joy'

import { HeaderActions } from './actions'

import { HeaderTitle } from './title'
import { useLayoutIsExpanded } from 'widgets/layout'
import { SIDEBAR_WIDTH } from 'widgets/sidebar'
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from '../constants'

export const Header = () => {
  const { isExpanded } = useLayoutIsExpanded()

  return (
    <Root isExpanded={isExpanded}>
      <HeaderTitle />
      <HeaderActions />
    </Root>
  )
}

const Root = styled('header')<{ isExpanded: boolean }>(
  ({ theme, isExpanded }) => ({
    position: 'fixed',
    top: '0',
    left: isExpanded ? SIDEBAR_WIDTH : 0,
    right: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.surface,
    height: HEADER_HEIGHT,
    borderBottom: '1px solid #4b5563',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('md')]: {
      left: 0,
      height: HEADER_HEIGHT_MOBILE,
    },
    zIndex: 999,
  })
)
