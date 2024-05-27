import { styled } from '@mui/joy'
import { useIsMobile } from 'shared/lib'
import { useLayoutIsExpanded } from 'widgets/layout'
import { SIDEBAR_WIDTH } from '../constants'
import { Logo } from 'widgets/logo'
import { TableList } from 'widgets/table'
import { ThemeSwitchCard } from 'widgets/theme'

export const Sidebar = () => {
  const { isExpanded } = useLayoutIsExpanded()

  const isMobile = useIsMobile()

  if (isMobile) {
    return null
  }

  return (
    <Root isExpanded={isExpanded}>
      <_Logo />
      <_TableList />
      <_ThemeSwitchCard />
    </Root>
  )
}

const Root = styled('aside')<{ isExpanded: boolean }>(
  ({ theme, isExpanded }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    width: SIDEBAR_WIDTH,
    backgroundColor: theme.palette.background.surface,
    borderRight: '1px solid #4b5563',
    transform: `translateX(${isExpanded ? 0 : -SIDEBAR_WIDTH}px)`,
    padding: theme.spacing(2, 0),
    zIndex: 999,
  })
)

const _Logo = styled(Logo)(({ theme }) => ({
  margin: theme.spacing(0, 2),
}))

const _TableList = styled(TableList)(({ theme }) => ({
  margin: theme.spacing(1, 0, 0, 0),
}))

const _ThemeSwitchCard = styled(ThemeSwitchCard)(({ theme }) => ({
  margin: theme.spacing(0, 2),
}))
