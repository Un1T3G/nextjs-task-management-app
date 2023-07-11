import {
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
  } from 'react'
  
  interface IContext {
    textAreaId?: string
    setTextAreaId: (value: string | undefined) => void
  }
  
  const TextAreaContext = createContext<IContext>({
    textAreaId: '',
    setTextAreaId() {},
  })
  
  interface IProviderProps {
    children?: ReactNode
  }
  
  export function TextAreaProvider({ children }: IProviderProps) {
    const [textAreaId, setTextAreaId] = useState<string | undefined>()
  
    const handleChangeTextAreaId = useCallback(
      (value: string | undefined) => setTextAreaId(value),
      [setTextAreaId]
    )
  
    const value = useMemo<IContext>(
      () => ({
        textAreaId: textAreaId,
        setTextAreaId: handleChangeTextAreaId,
      }),
      [textAreaId, handleChangeTextAreaId]
    )
  
    return <TextAreaContext.Provider value={value}>{children}</TextAreaContext.Provider>
  }
  
  export const useTextAreaContext = () => useContext(TextAreaContext)
  