import '@fontsource/inter'
import { NoSSR } from 'shared/lib'
import type { AppProps } from 'next/app'

import { Providers } from './providers'
import './styles/index.css'
import { RootLayout } from 'widgets/layout'

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Providers pageProps={pageProps}>
      <NoSSR>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </NoSSR>
    </Providers>
  )
}
