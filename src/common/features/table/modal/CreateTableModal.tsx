import { Modal, ModalTitle } from '@/common/ui/modal'
import tw from 'tailwind-styled-components'
import { Button } from '@/common/ui/button'
import { FormEvent, useRef, useState } from 'react'
import { DEFAULT_COLUMNS_VALUES } from '@/common/data/constants'
import { useAppDispatch } from '@/common/hooks/useRedux'
import { mainActions } from '@/common/store/slices/main'
import { ITableColumn } from '@/common/models/ITableColumn'
import { TableTitleField } from './ui/TableTitleField'
import { TableColumns } from './ui/TableColumns'
import { v4 as uuid } from 'uuid'

interface IProps {
  open: boolean
  onClose: VoidFunction
}

export function CreateTableModal(props: IProps) {
  const ref = useRef<HTMLFormElement>(null)

  const [title, setTitle] = useState('')
  const [columns, setColumns] = useState<ITableColumn[]>(DEFAULT_COLUMNS_VALUES)

  const dispatch = useAppDispatch()

  const { onClose: handleClose } = props

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(
      mainActions.addTable({
        id: uuid(),
        title,
        columns,
      })
    )

    ref.current!.reset()

    handleClose()
  }

  return (
    <Modal {...props}>
      <form ref={ref} onSubmit={handleOnSubmit}>
        <ModalTitle className="mb-7">Add new table</ModalTitle>
        <TableTitleField title={title} setTitle={setTitle} />
        <ColumnsTitle>Table columns</ColumnsTitle>
        <TableColumns columns={columns} setColumns={setColumns} />
        <Button type="submit" className="w-full mt-8" button_type="primary">
          Create new table
        </Button>
      </form>
    </Modal>
  )
}

const ColumnsTitle = tw.div`
text-white
text-base
font-bold
mb-2
`
