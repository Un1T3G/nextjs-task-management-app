import dynamic from 'next/dynamic'
import React, { PropsWithChildren } from 'react'

const _NoSsr = (props: PropsWithChildren) => (
  <React.Fragment>{props.children}</React.Fragment>
)

export const NoSSR = dynamic(() => Promise.resolve(_NoSsr), {
  ssr: false,
})
