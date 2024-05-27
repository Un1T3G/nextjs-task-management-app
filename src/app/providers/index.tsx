import { SnackbarProvider } from 'shared/ui'
import { PropsWithChildren } from 'react'

import { CacheProvider } from './cache'
import { ThemeProvider } from './theme'
import { DialogsProvider } from './dialogs'

export const Providers = ({
  children,
  pageProps,
}: PropsWithChildren<{ pageProps: any }>) => {
  return (
    <CacheProvider pageProps={pageProps}>
      <ThemeProvider>
        <SnackbarProvider>
          <DialogsProvider>{children}</DialogsProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
