import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface IContext {
  inputId?: string
  setInputId: (value: string | undefined) => void
}

const InputContext = createContext<IContext>({
  inputId: '',
  setInputId() {},
})

interface IProviderProps {
  children?: ReactNode
}

export function InputProvider({ children }: IProviderProps) {
  const [inputId, setInputId] = useState<string | undefined>()

  const handleChangeInputId = useCallback(
    (value: string | undefined) => setInputId(value),
    [setInputId]
  )

  const value = useMemo(
    () => ({
      inputId,
      setInputId: handleChangeInputId,
    }),
    [inputId, handleChangeInputId]
  )

  return <InputContext.Provider value={value}>{children}</InputContext.Provider>
}

export const useInputContext = () => useContext(InputContext)
