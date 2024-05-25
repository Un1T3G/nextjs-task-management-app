import createCache from '@emotion/cache'
import { CacheProvider as _CacheProvider } from '@emotion/react'
import { useServerInsertedHTML } from 'next/navigation'
import { PropsWithChildren, useState } from 'react'

export const CacheProvider = ({
  pageProps,
  children,
}: PropsWithChildren<{ pageProps: any }>) => {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({
      key: 'uni',
    })
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) {
      return null
    }
    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    )
  })

  return <_CacheProvider value={cache}>{children}</_CacheProvider>
}
