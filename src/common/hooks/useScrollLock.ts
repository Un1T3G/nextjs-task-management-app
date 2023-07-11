import { useCallback, useEffect, useState } from 'react'

function getInitialValue() {
  if (typeof window === 'undefined') {
    return false
  }

  return document.body.classList.contains('overflow-hidden')
}

export function useScrollLock(): [boolean, (_: boolean) => void] {
  const [isLocked, setIsLocked] = useState(getInitialValue)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const hasClass = document.body.classList.contains('overflow-hidden')

    if (isLocked && !hasClass) {
      document.body.classList.add('overflow-hidden')
    } else if (hasClass) {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isLocked])

  const changeScrollState = useCallback((state: boolean) => {
    setIsLocked(state)
  }, [])

  return [isLocked, changeScrollState]
}
