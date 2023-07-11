import { Layout } from '@/common/components/layout'
import { useAppSelector } from '@/common/hooks/useRedux'
import { HomeTasksTab } from './ui/HomeTasksTab'
import { HomeWelcomeTab } from './ui/HomeWelcomeTab'

export function HomeScreen() {
  const { tables, selectedTableIndex } = useAppSelector((x) => x.mainSlice)

  const table =
    typeof selectedTableIndex === 'number'
      ? tables[selectedTableIndex]
      : undefined

  const tabs: Record<number, JSX.Element> = {
    1: <HomeTasksTab table={table!} tableIndex={selectedTableIndex!} />,
    0: <HomeWelcomeTab />,
  }

  return <Layout>{tabs[+Boolean(table)]}</Layout>
}
