import { styled, useColorScheme } from '@mui/joy'

import Image from 'next/image'
import { brandLogo } from 'shared/assets/images'

interface IProps {
  className?: string
}

export const Logo = ({ className }: IProps) => {
  const { mode } = useColorScheme()

  const isDarkMode = mode === 'dark'

  return (
    <Root
      alt="Logo"
      src={brandLogo}
      sizes="100vw"
      className={className}
      sx={{
        filter: isDarkMode ? 'invert(1)' : 'none',
      }}
    />
  )
}

const Root = styled(Image)({})
