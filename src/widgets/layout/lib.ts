import { useUnit } from 'effector-react'
import { $isExpanded } from './model'

export const useLayoutIsExpanded = () => {
  const [isExpanded] = useUnit([$isExpanded])

  return {
    isExpanded,
  }
}
