import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import 'tailwindcss/tailwind.css'

import SEO from '../next-seo.config'

import Layout from '../container/Layout/Layout'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
export default App
