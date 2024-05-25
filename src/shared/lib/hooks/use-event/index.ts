import { useCallback, useEffect, useRef } from 'react'

export const useEvent = <T extends Function>(fn: T): T => {
  const fnRef = useRef(fn)

  useEffect(() => {
    fnRef.current = fn
  }, [fn])

  const eventCb = useCallback(
    (...args: unknown[]) => {
      return fnRef.current.apply(null, args)
    },
    [fnRef]
  )

  return eventCb as unknown as T
}
