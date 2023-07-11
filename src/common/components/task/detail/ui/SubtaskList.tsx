import { ISubtask } from '@/common/models/ISubtask'
import tw from 'tailwind-styled-components'
import { SubtaskItem } from './SubtaskItem'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { mainActions } from '@/common/store/slices/main'

interface IProps {
  tableIndex: number
  columnIndex: number
  taskIndex: number
  subtasks: ISubtask[]
}

export function SubtaskList({
  tableIndex,
  columnIndex,
  taskIndex,
  subtasks,
}: IProps) {
  const dispatch = useAppDispatch()

  const handleToggleSubtask = (subtaskIndex: number) => () => {
    dispatch(
      mainActions.toggleSubtask({
        tableIndex,
        columnIndex,
        taskIndex,
        subtaskIndex,
      })
    )
  }
  return (
    <Wrapper>
      {subtasks.map((e, index) => (
        <SubtaskItem
          key={e.id}
          subtask={e}
          toggleSubtask={handleToggleSubtask(index)}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = tw.ul`
list-none
space-y-2
mb-7
`
