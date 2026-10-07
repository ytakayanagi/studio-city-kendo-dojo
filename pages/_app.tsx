import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import '@fontsource-variable/inter'
import '@fontsource-variable/bricolage-grotesque'
import '../styles/globals.css'

import Layout from '../container/Layout/Layout'

function App({ Component, pageProps }: AppProps): React.JSX.Element {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default App
