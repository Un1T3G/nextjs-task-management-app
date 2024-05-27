import { CssBaseline, CssVarsProvider } from '@mui/joy'
import { PropsWithChildren } from 'react'

import { theme } from './config'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <CssVarsProvider
      defaultMode="system"
      theme={theme}
      modeStorageKey="theme-mode"
      disableNestedContext
    >
      <CssBaseline />
      {children}
    </CssVarsProvider>
  )
}

export * from './config'
