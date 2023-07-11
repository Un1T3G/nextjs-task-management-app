import {
  Children,
  useCallback,
  useMemo,
  useRef,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useLayoutEffect,
  ReactElement,
} from 'react'
import { SelectProvider, useSelectContext } from '../model/SelectProvider'
import tw from 'tailwind-styled-components'
import { useOutside } from '@/common/hooks/useOutside'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { SelectOption } from './SelectOption'

interface IProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'onChange'
  > {
  value?: any
  onChange: (value: any) => void
  placeHolderText?: string
}

function WrappedComponent({
  value,
  children,
  placeHolderText = 'None',
  ...rest
}: Omit<IProps, 'onChange'>) {
  const labelRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const { expanded, viewNode, toggle, changeExpanded, changeValue } =
    useSelectContext()

  useOutside(
    [listRef as any, labelRef],
    useCallback(() => {
      changeExpanded(false)
    }, [changeExpanded])
  )

  useLayoutEffect(() => {
    Children.forEach(children, (child) => {
      const element = child as ReactElement
      if (element.type === SelectOption) {
        if (element.props.value === value) {
          changeValue(value, element.props.children)
        }
      }
    })
  }, [])

  const label = viewNode ?? placeHolderText

  const Icon = useMemo(
    () => (expanded ? FiChevronUp : FiChevronDown),
    [expanded]
  )

  return (
    <Wrapper>
      <SelectLabel type="button" ref={labelRef} onClick={toggle} {...rest}>
        <div className="flex-1 text-left">{label}</div>
        <Icon className="ml-2 text-indigo-500" />
      </SelectLabel>
      {expanded && <SelectList ref={listRef}>{children}</SelectList>}
    </Wrapper>
  )
}

export function Select({ value, onChange, ...rest }: IProps) {
  return (
    <SelectProvider value={value} onChange={onChange}>
      <WrappedComponent value={value} {...rest} />
    </SelectProvider>
  )
}

const Wrapper = tw.div`
relative
`

const SelectLabel = tw.button`
flex
items-center
text-gray-800
dark:text-white
font-bold
text-sm
px-3
py-1
w-full
rounded-md
border-[1px]
h-10
border-[#828fa3]
`

const SelectList = tw.ul`
list-none
absolute
left-0
w-full
-bottom-2
translate-y-[100%]
p-2
rounded-md
drop-shadow-md
bg-[#f4f7fd]
dark:bg-[#20212c]
`
