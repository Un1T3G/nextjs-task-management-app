import tw from 'tailwind-styled-components'
import Image from 'next/image'
import brandLogo from '@/common/assets/brand/logo.svg'
import { useAppSelector } from '@/common/hooks/useRedux'

export function Logo() {
  const { theme } = useAppSelector((x) => x.themeSlice)

  return (
    <BrandLogo
      alt="Brand logo"
      src={brandLogo}
      style={{
        filter: theme === 'dark' ? 'invert(1)' : '',
      }}
    />
  )
}

const BrandLogo = tw(Image)`
p-5
`
