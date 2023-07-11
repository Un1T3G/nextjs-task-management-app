import { WelcomeCard } from '@/common/components/welcome-card'
import {
  Header,
  LayoutContent,
  HeaderTitleNoSSR,
} from '@/common/components/layout'

export function HomeWelcomeTab() {
  return (
    <LayoutContent className="flex items-center">
      <Header>
        <HeaderTitleNoSSR>Task Management</HeaderTitleNoSSR>
      </Header>
      <WelcomeCard />
    </LayoutContent>
  )
}
