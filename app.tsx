import React, { ComponentType } from 'react'
import Bar from './components/bar.tsx'

export default function App({ Page, pageProps }: { Page: ComponentType<any>, pageProps: any }) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
        <title>Torn Hub</title>
        <link rel="stylesheet" href="./style/index.css" />
      </head>
      <Bar />
      <Page {...pageProps} />
    </main>
  )
}
