//@ts-ignore
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'
import { Button, Stack } from '@mui/joy'
import { useUnit } from 'effector-react'
import {
  $canSwipeLeft,
  $canSwipeRight,
  swipeLeftEvent,
  swipeRightEvent,
} from '../model'

export const ColumnSwitcher = () => {
  const [canSwipeLeft, canSwipeRight, swipeLeft, swipeRight] = useUnit([
    $canSwipeLeft,
    $canSwipeRight,
    swipeLeftEvent,
    swipeRightEvent,
  ])

  return (
    <Stack flexDirection="row" columnGap={1} mb={2}>
      <Button
        variant="soft"
        color="neutral"
        size="sm"
        onClick={swipeLeft}
        disabled={!canSwipeLeft}
      >
        <UilAngleLeft />
      </Button>
      <Button
        variant="soft"
        color="neutral"
        size="sm"
        onClick={swipeRight}
        disabled={!canSwipeRight}
      >
        <UilAngleRight />
      </Button>
    </Stack>
  )
}
