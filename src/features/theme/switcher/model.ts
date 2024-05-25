import { useColorScheme } from '@mui/joy'
import { useEvent } from 'shared/lib'

export const useThemeSwitcher = () => {
  const { mode, setMode } = useColorScheme()

  const isLightMode = mode === 'light'

  const toggleMode = useEvent(() => {
    setMode(isLightMode ? 'dark' : 'light')
  })

  return {
    isChecked: !isLightMode,
    toggleMode,
  }
}
