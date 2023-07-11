import { RefObject, useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

interface IProps {
  listRef: RefObject<HTMLDivElement>
}

const SIDEBAR_WIDTH = 256
const TASK_ITEM_WIDTH = 280 + 20

export function ListScroll({ listRef }: IProps) {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const listNode = listRef.current

    if (!listNode) {
      return
    }

    listNode.style.transform = `translateX(${-slide * TASK_ITEM_WIDTH}px)`
  }, [slide])

  const handleOnSlidePrev = () => {
    if (slide <= 0) {
      return
    }

    setSlide((prev) => prev - 1)
  }

  const handleOnSlideNext = () => {
    const listNode = listRef.current

    if (
      !listNode ||
      window.innerWidth - SIDEBAR_WIDTH >=
        listNode?.clientWidth - (slide - 1) * TASK_ITEM_WIDTH
    ) {
      return
    }

    setSlide((prev) => prev + 1)
  }

  return (
    <Wrapper>
      <ActionButton onClick={handleOnSlidePrev}><BsArrowLeftShort/></ActionButton>
      <ActionButton onClick={handleOnSlideNext}><BsArrowRightShort/></ActionButton>
    </Wrapper>
  )
}

const Wrapper = tw.div`
flex
mb-2
space-x-2
`

const ActionButton = tw.button`
px-3
py-[2px]
rounded-full
text-gray-800
bg-black/20
dark:bg-white/20
dark:text-white
`
