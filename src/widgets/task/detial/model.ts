import { useUnit } from 'effector-react'
import { $tables } from 'entities/table'
import { $openedTaskOptions, setOpenedTaskOptionsEvent } from 'entities/task'
import { useMemo } from 'react'

export const useTaskDetail = () => {
  const [tables, openedTaskOptions, setOpenedTaskOptions] = useUnit([
    $tables,
    $openedTaskOptions,
    setOpenedTaskOptionsEvent,
  ])

  const handleOnClose = () => {
    setOpenedTaskOptions(null)
  }

  const task = useMemo(() => {
    return openedTaskOptions
      ? tables[openedTaskOptions.tableIndex].columns[
          openedTaskOptions.columnIndex
        ].tasks[openedTaskOptions.taskIndex]
      : null
  }, [
    tables,
    openedTaskOptions?.tableIndex,
    openedTaskOptions?.columnIndex,
    openedTaskOptions?.taskIndex,
  ])

  return {
    open: Boolean(openedTaskOptions),
    onClose: handleOnClose,
    task,
    openedTaskOptions,
  }
}
