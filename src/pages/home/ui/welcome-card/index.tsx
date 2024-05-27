//@ts-ignore
import { UilGithub } from '@iconscout/react-unicons'
import { Button, Card, Stack, Typography, styled } from '@mui/joy'

import Image from 'next/image'

import { GetStartedButton } from './get-started-button'
import { taskImage } from 'shared/assets/images'

export const WelcomeCard = () => {
  return (
    <Root>
      <_Image src={taskImage} alt="Task illustration" />
      <Typography level="h4">Welcome to Your Personal Task Manager</Typography>
      <Typography textAlign="justify" sx={{ maxWidth: 550 }}>
        Streamline your tasks with our task manager. Stay organized, prioritize
        your to-do list, and track progress all in one place. Boost productivity
        and achieve your goals effortlessly.
      </Typography>
      <Stack flexDirection="row" columnGap={2} sx={{ mb: 1 }}>
        <GetStartedButton />
        <Button
          component="a"
          href="https://github.com/Un1T3G/nextjs-task-management-app"
          target="_blank"
          startDecorator={<UilGithub />}
          variant="outlined"
        >
          Github
        </Button>
      </Stack>
      <AuthorText>
        Created by <b>Un1T3G</b>
      </AuthorText>
    </Root>
  )
}

const Root = styled(Card)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
})

const _Image = styled(Image)({
  width: '300px',
  height: 'auto',
})

const AuthorText = styled(Typography)({
  position: 'absolute',
  bottom: 16,
  right: 16,
  alignSelf: 'flex-end',
})
