import { useState } from 'react'

import { useEvent } from '../use-event'

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)
  const toggle = useEvent(() => setState((prev) => !prev))
  return [state, toggle] as const
}
