import { ThemeSwitch } from '@/common/features/theme/switcher'
import { Backdrop } from '@/common/ui/backdrop'
import tw from 'tailwind-styled-components'
import { Dispatch, SetStateAction } from 'react'
import { TableList } from '@/common/components/table/list'

interface IProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function Menu({ open, setOpen }: IProps) {
  const handleClose = () => {
    setOpen(false)
  }

  return open ? (
    <Wrapper>
      <Backdrop className="bg-black/50" onClose={handleClose} />
      <List>
        <div className="px-5">
          <TableList />
        </div>
        <ThemeSwitch />
      </List>
    </Wrapper>
  ) : null
}

const Wrapper = tw.div`
mt-20
absolute
top-0
left-0
w-full
min-h-screen
`

const List = tw.div`
max-w-md
w-full
mt-5
mx-auto
rounded-md
drop-shadow-md
py-5
bg-[#2b2c37]
`
