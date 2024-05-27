import { useUnit } from 'effector-react'
import { WelcomeCard } from './welcome-card'
import { $selectedTable } from 'entities/table'
import { Box } from '@mui/joy'
import { ColumnList } from 'widgets/column'

export const HomePage = () => {
  const [table] = useUnit([$selectedTable])

  return (
    <>
      <title>Kanban task management</title>
      {table ? (
        <Box sx={{ width: '100%' }}>
          <ColumnList />
        </Box>
      ) : (
        <WelcomeCard />
      )}
    </>
  )
}
