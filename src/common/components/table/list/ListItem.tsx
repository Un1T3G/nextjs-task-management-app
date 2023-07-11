import { ITable } from '@/common/models/ITable'
import tw from 'tailwind-styled-components'
import { GoProjectRoadmap } from 'react-icons/go'

interface IProps {
  table: ITable
  isActive: boolean
  onClick: VoidFunction
}

export function TableListItem({ table, isActive, onClick }: IProps) {
  const { title } = table

  return (
    <Wrapper
      className={
        isActive ? 'bg-indigo-500 text-white' : 'bg-transparent text-[#828fa3]'
      }
      onClick={onClick}
    >
      <Icon />
      {title}
    </Wrapper>
  )
}

const Wrapper = tw.button`
flex
items-center
w-full
pl-5
py-2
text-left
rounded-tr-full
rounded-br-full
hover:text-indigo-500
hover:bg-white
mb-[2px]
last:mb-0
`

const Icon = tw(GoProjectRoadmap)`
mr-4
text-[#828fa3]
`
