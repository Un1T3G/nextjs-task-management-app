//@ts-ignore
import { UilMoon, UilSun } from '@iconscout/react-unicons/'
import { styled } from '@mui/joy'
import { ThemeSwitch } from 'features/theme'

interface IProps {
  className?: string
}

export const ThemeSwitchCard = ({ className }: IProps) => {
  return (
    <Root className={className}>
      <ThemeSwitch startDecorator={<UilSun />} endDecorator={<UilMoon />} />
    </Root>
  )
}

export const Root = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.level1,
  borderRadius: 8,
  padding: theme.spacing(1.5, 0),
}))
