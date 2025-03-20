// filepath: c:\Users\Carlos\Desktop\ngoding\pasifixc\components\NoSSR.tsx
import dynamic from 'next/dynamic'
import React from 'react'

const NoSSR = (props: { children: React.ReactNode }) => (
  <React.Fragment>{props.children}</React.Fragment>
)

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
})