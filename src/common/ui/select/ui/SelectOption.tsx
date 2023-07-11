import { DetailedHTMLProps, LiHTMLAttributes, useCallback } from 'react'
import tw from 'tailwind-styled-components'
import { useSelectContext } from '../model/SelectProvider'

interface IProps<T>
  extends Omit<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
    'value' | 'onClick'
  > {
  value: T
}

export function SelectOption<T>({ value, children, ...rest }: IProps<T>) {
  const {
    value: selectedValue,
    changeValue,
    changeExpanded,
  } = useSelectContext()

  const handleOnClick = useCallback(() => {
    changeValue(value, children)
    changeExpanded(false)
  }, [value, children, changeValue, changeExpanded])

  const isSelected = value === selectedValue

  return (
    <Wrapper
      onClick={handleOnClick}
      {...rest}
      className={isSelected ? 'bg-black/10 dark:bg-white/10' : 'bg-transparent'}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = tw.li`
text-gray-800
dark:text-white
text-sm
px-2
py-1
cursor-pointer
w-full
rounded
mb-1
last:mb-0
bg-black/40
dark:hover:bg-white/40
`
