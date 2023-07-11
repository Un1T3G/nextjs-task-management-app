import { ITableColumn } from '@/common/models/ITableColumn'
import { ITask } from '@/common/models/ITask'
import { Modal } from '@/common/ui/modal'
import tw from 'tailwind-styled-components'
import { ToggleMoreOptionsButton } from './ui/ToggleMoreOptionsButton'
import { SubtaskList } from './ui/SubtaskList'
import { TaskSelect } from './ui/TaskSelect'

interface IProps {
  open: boolean
  onClose: VoidFunction
  tableIndex: number
  columnIndex: number
  taskIndex: number
  task: ITask
  columns: ITableColumn[]
}

export function DetailTaskModal({
  open,
  onClose,
  tableIndex,
  columnIndex,
  taskIndex,
  task,
  columns,
}: IProps) {
  const modalProps = { open, onClose }

  return (
    <Modal {...modalProps}>
      <Header>
        <Title>{task.title}</Title>
        <ToggleMoreOptionsButton
          tableIndex={tableIndex}
          columnIndex={columnIndex}
          taskIndex={taskIndex}
          task={task}
          columns={columns}
        />
      </Header>
      {task.description && <Description>{task.description}</Description>}
      <SubtaskList
        tableIndex={tableIndex}
        columnIndex={columnIndex}
        taskIndex={taskIndex}
        subtasks={task.subtasks}
      />
      <TaskSelect
        tableIndex={tableIndex}
        columnIndex={columnIndex}
        taskIndex={taskIndex}
        columns={columns}
      />
    </Modal>
  )
}

const Header = tw.div`
flex
items-center
justify-between
mb-7
`

const Title = tw.h2`
text-xl
text-gray-800
dark:text-white
font-bold
`

const Description = tw.p`
text-sm
text-[#828fa3]
mb-7
`
