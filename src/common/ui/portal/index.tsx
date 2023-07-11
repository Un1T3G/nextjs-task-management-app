import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface IProps {
  children?: ReactNode
}

export function Portal({ children }: IProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const element = document.createElement('div')
    document.getElementById('__next')!.append(element)

    ref.current = element
    setMounted(true)

    return () => {
      ref.current?.remove()
    }
  }, [])

  return ref.current && mounted ? createPortal(children, ref.current) : null
}
