import { Card, Typography, styled } from '@mui/joy'
import { ITodo } from '../../types'
import { ReactNode } from 'react'

interface IProps {
  startDecorator?: ReactNode
  todo: ITodo
  className?: string
}

export const TodoItem = ({ startDecorator, todo, className }: IProps) => {
  return (
    <_Card className={className} variant="soft">
      {startDecorator}
      <Typography>{todo.title}</Typography>
    </_Card>
  )
}

const _Card = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.spacing(1, 1),
}))
