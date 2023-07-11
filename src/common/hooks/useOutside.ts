import { RefObject, useEffect } from 'react'

export function useOutside<T extends HTMLElement>(
  refs: RefObject<T>[],
  handler: VoidFunction
) {
  useEffect(() => {
    const onClickHandler = (e: MouseEvent) => {
      if (
        refs
          .filter((x) => x.current)
          .some((x) => x.current!.contains(e.target as Node))
      ) {
        return
      }

      handler()
    }

    window.addEventListener('click', onClickHandler)

    return () => {
      window.removeEventListener('click', onClickHandler)
    }
  }, [refs, handler])
}
