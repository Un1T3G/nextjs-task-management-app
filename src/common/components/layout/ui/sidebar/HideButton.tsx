import tw from 'tailwind-styled-components'
import { Button } from '@/common/ui/button'
import { BiSolidHide, BiShow } from 'react-icons/bi'
import { useLayoutContext } from '../../model/LayoutProvider'

export function HideSidebarButton() {
  const { expanded, toggleExpanded } = useLayoutContext()

  return (
    <Wrapper className={expanded ? 'w-52' : ''}>
      <ToggleButton
        button_type={expanded ? 'transparent' : 'primary'}
        corner_type="none"
        onClick={toggleExpanded}
        className={expanded ? 'text-[#828fa3]' : ''}
      >
        {expanded ? (
          <BiSolidHide className="mr-2 text-inherit text-lg" />
        ) : (
          <BiShow className="mr-2 text-inherit text-lg" />
        )}
        {expanded ? <span>Hide sidebar</span> : null}
      </ToggleButton>
    </Wrapper>
  )
}

const Wrapper = tw.div`
fixed
bottom-5
left-0
z-50
`

const ToggleButton = tw(Button)`
text-white
flex
items-center
w-full
pl-5
rounded-tr-full
rounded-br-full
h-10
`
