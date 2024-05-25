// @ts-ignore
import { UilEye, UilEyeSlash } from '@iconscout/react-unicons'
import { IconButton, styled } from '@mui/joy'
import { useUnit } from 'effector-react'

import { bool2str, str2bool, useIsMobile } from 'shared/lib'
import { toggleExpandedEvent, useLayoutIsExpanded } from 'widgets/layout'
import { SIDEBAR_WIDTH } from 'widgets/sidebar'

export const SidebarToggleButton = () => {
  const { isExpanded } = useLayoutIsExpanded()

  const toggleSidebar = useUnit(toggleExpandedEvent)

  const isMobile = useIsMobile()

  const Icon = isExpanded ? UilEyeSlash : UilEye

  if (isMobile) {
    return null
  }

  return (
    <Root
      onClick={toggleSidebar}
      variant="solid"
      is_expanded={bool2str(isExpanded)}
    >
      <Icon />
    </Root>
  )
}

const Root = styled(IconButton)<{ is_expanded: string }>(({ is_expanded }) => ({
  position: 'fixed',
  bottom: 22,
  left: str2bool(is_expanded) ? SIDEBAR_WIDTH : 0,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  zIndex: 999,
}))
