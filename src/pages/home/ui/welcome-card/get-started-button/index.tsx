import { Button } from '@mui/joy'

import { useGetStartedButton } from './model'

export const GetStartedButton = () => {
  const { onClick } = useGetStartedButton()

  return <Button onClick={onClick}>Get started</Button>
}
