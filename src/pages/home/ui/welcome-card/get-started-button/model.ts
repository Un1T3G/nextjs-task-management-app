import { useUnit } from 'effector-react'

import { $tables } from 'entities/table'
import {
  createTableDialogModel,
  setSelectedTableIndexEvent,
} from 'features/table'
import { useDialogApi } from 'shared/lib'

export const useGetStartedButton = () => {
  const [tables, setSelectedTableIndex] = useUnit([
    $tables,
    setSelectedTableIndexEvent,
  ])

  const { toggleOpen } = useDialogApi(createTableDialogModel)

  const handleOnClick = () => {
    if (tables.length > 0) {
      setSelectedTableIndex(0)
    } else {
      toggleOpen()
    }
  }

  return {
    onClick: handleOnClick,
  }
}
