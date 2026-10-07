import Head from 'next/head'
import { generateNextSeo, type NextSeoProps } from 'next-seo/pages'

import SEO from '../../next-seo.config'

const Seo = (props: NextSeoProps): React.JSX.Element => (
  <Head>{generateNextSeo({ ...SEO, ...props })}</Head>
)

export default Seo
