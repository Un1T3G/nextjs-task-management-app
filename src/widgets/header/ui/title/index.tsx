//@ts-ignore
import { UilAngleDown } from '@iconscout/react-unicons'
import { Stack, styled } from '@mui/joy'

import { useSelectedTable } from 'entities/table'

import { useIsMobile, useToggle } from 'shared/lib'
import { MobileMenu } from 'widgets/mobile-menu'

const TITLE = 'Task management'

export const HeaderTitle = () => {
  const isMobile = useIsMobile()
  const [open, toggleOpen] = useToggle(false)

  const { table } = useSelectedTable()

  const title = table ? table.title : TITLE

  if (isMobile) {
    return (
      <>
        <Stack
          flexDirection="row"
          alignItems="center"
          spacing={0.5}
          onClick={toggleOpen}
          sx={{ cursor: 'pointer' }}
        >
          <Title>{title}</Title>
          <UilAngleDown />
        </Stack>
        <MobileMenu open={open} onClose={toggleOpen} />
      </>
    )
  }

  return <Title>{title}</Title>
}

const Title = styled('h1')(({ theme }) => ({
  fontSize: theme.typography['title-lg'].fontSize,
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}))
