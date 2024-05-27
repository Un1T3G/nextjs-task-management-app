import { Switch } from '@mui/joy'
import { ReactNode } from 'react'

import { useThemeSwitcher } from './model'

interface IProps {
  className?: string
  startDecorator?: ReactNode
  endDecorator?: ReactNode
}

export const ThemeSwitch = ({
  className,
  startDecorator,
  endDecorator,
}: IProps) => {
  const { isChecked, toggleMode } = useThemeSwitcher()

  return (
    <Switch
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      onChange={toggleMode}
      checked={isChecked}
      className={className}
      size="lg"
    />
  )
}
