import { ISubtask } from '@/common/models/ISubtask'
import { Checkbox } from '@/common/ui/checkbox'
import { bool2string, string2bool } from '@/common/utils'
import tw from 'tailwind-styled-components'

interface IProps {
  subtask: ISubtask
  toggleSubtask: VoidFunction
}

export function SubtaskItem({ subtask, toggleSubtask }: IProps) {
  return (
    <Wrapper>
      <Checkbox value={subtask.doing} onChange={toggleSubtask} />
      <Title $is_completed={bool2string(subtask.doing)}>{subtask.title}</Title>
    </Wrapper>
  )
}

const Wrapper = tw.li`
flex
items-center
w-full
px-3
py-2
rounded
bg-indigo-500/10
hover:bg-indigo-500/20
`

interface ITitleProps {
  $is_completed: 'true' | 'false'
}

const Title = tw.span<ITitleProps>`
text-gray-800
dark:text-white
text-sm
ml-2
${({ $is_completed }) =>
  string2bool($is_completed) ? 'underline' : 'no-underline'}
`
