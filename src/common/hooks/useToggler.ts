import { useCallback, useState } from 'react'

export function useToggler(
  defaultValue: boolean
): [boolean, VoidFunction, (value: boolean) => void] {
  const [state, setState] = useState(defaultValue)

  const toggle = useCallback(() => setState((prev) => !prev), [setState])

  const handleChange = useCallback(
    (value: boolean) => setState(value),
    [setState]
  )

  return [state, toggle, handleChange]
}
