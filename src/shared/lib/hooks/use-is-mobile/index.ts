import { useTheme } from '@mui/joy'

import { useMediaQuery } from '../use-media-query'

export const useIsMobile = () => {
  const theme = useTheme()
  const matches = useMediaQuery(
    theme.breakpoints.down('md').split(' ').at(-1) as any
  )

  return matches
}
