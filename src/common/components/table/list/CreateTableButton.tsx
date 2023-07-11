import tw from 'tailwind-styled-components'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { useToggler } from '@/common/hooks/useToggler'
import { CreateTableModal } from '../../../features/table/modal/CreateTableModal'

export function CreateTableButton() {
  const [visibility, toggle] = useToggler(false)

  return (
    <>
      <Wrapper onClick={toggle}>
        <Icon />
        Create new board
      </Wrapper>
      <CreateTableModal open={visibility} onClose={toggle} />
    </>
  )
}

const Wrapper = tw.button`
flex
items-center
w-full
py-2
pl-5
text-indigo-500
bg-transparent
`

const Icon = tw(AiOutlinePlusSquare)`
mr-4
text-[#828fa3]
`
