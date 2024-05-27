import { useUnit } from 'effector-react'
import { $selectedTable } from './model'

export const useSelectedTable = () => {
  const [table] = useUnit([$selectedTable])

  return { table }
}
