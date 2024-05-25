import { ModalClose, styled } from '@mui/joy'
import { Drawer } from 'shared/ui'
import { Logo } from 'widgets/logo'
import { TableList } from 'widgets/table'
import { ThemeSwitchCard } from 'widgets/theme'

interface IProps {
  open: boolean
  onClose: VoidFunction
}

export const MobileMenu = ({ open, onClose }: IProps) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <Row>
        <Logo />
        <_ModelClose variant="soft" />
      </Row>
      <_TableList />
      <_ThemeSwitchCard />
    </Drawer>
  )
}

const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: theme.spacing(2, 2, 0, 2),
}))

const _ModelClose = styled(ModalClose)({
  margin: 0,
  position: 'static',
})

const _TableList = styled(TableList)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}))

const _ThemeSwitchCard = styled(ThemeSwitchCard)(({ theme }) => ({
  margin: theme.spacing(0, 2, 2, 2),
}))
