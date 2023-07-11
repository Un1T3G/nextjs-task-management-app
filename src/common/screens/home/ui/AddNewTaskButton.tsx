import { CreateTaskModal } from '@/common/features/task'
import { useMediaQuery } from '@/common/hooks/useMediaQuery'
import { useToggler } from '@/common/hooks/useToggler'
import { ITable } from '@/common/models/ITable'
import { Button } from '@/common/ui/button'
import { bool2string } from '@/common/utils'
import { useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

interface IProps {
  table: ITable
  tableIndex: number
}

export function AddNewTaskButton({ table, tableIndex }: IProps) {
  const [open, toggleOpen] = useToggler(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const [mounted, , setMounted] = useToggler(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const content: Record<'true' | 'false', JSX.Element | string> = {
    true: 'Add new task',
    false: <AiOutlinePlus className="text-white" />,
  }

  console.log(open)

  return (
    <>
      <Button onClick={toggleOpen}>
        {content[bool2string(isDesktop && mounted)]}
      </Button>
      {open ? (
        <CreateTaskModal
          open={open}
          onClose={toggleOpen}
          columns={table.columns}
          tableIndex={tableIndex}
        />
      ) : null}
    </>
  )
}
