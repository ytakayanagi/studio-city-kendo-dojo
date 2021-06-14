import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo.config'

import '../styles/globals.css'
import Layout from '../container/Layout/Layout'
import Alert from '../components/Alert/Alert'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Layout>
        <Alert className="mt-6" href="/contact">
          We are excited to announce that our in-person practice is now open
          with restrictions and safety measures.
        </Alert>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default App
