import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
  useContext,
} from 'react'

interface IContext {
  expanded: boolean
  changeExpanded: (value: boolean) => void
  toggleExpanded: VoidFunction
}

const LayoutContext = createContext<IContext>({
  expanded: true,
  changeExpanded(value) {},
  toggleExpanded(){}
})

interface IProviderProps {
  children?: ReactNode
}

export function LayoutProvider({ children }: IProviderProps) {
  const [expanded, setExpanded] = useState(true)

  const handleChangeExpanded = useCallback(
    (value: boolean) => setExpanded(value),
    [setExpanded]
  )

  const handleToggleExpanded = useCallback(() => {
    setExpanded(prev => !prev)
  }, [])

  const value = useMemo<IContext>(
    () => ({
      expanded,
      changeExpanded: handleChangeExpanded,
      toggleExpanded: handleToggleExpanded
    }),
    [expanded, handleChangeExpanded, handleToggleExpanded]
  )

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  )
}

export const useLayoutContext = () => useContext(LayoutContext)
