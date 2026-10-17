import Seo from '../components/Seo/Seo'

import CallToAction from '../components/CallToAction/CallToAction'
import Gallery from '../components/Gallery/Gallery'
import PageHeader from '../components/PageHeader/PageHeader'
import { gallery, photos } from '../lib/photos'

export default function GalleryPage(): React.JSX.Element {
  return (
    <>
      <Seo
        title="Gallery"
        description="Photos from Friday practice, tournaments and dojo events at Studio City Kendo Dojo."
      />
      <PageHeader
        eyebrow="Gallery"
        title="Life at the dojo"
        kanji="写真"
        image={photos.motionStrike}
      >
        <p>
          Friday keiko, promotion exams, tournaments across Southern California
          and Nationals, and the parties in between.
        </p>
      </PageHeader>

      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Gallery photos={gallery} />
        </div>
      </section>

      <CallToAction />
    </>
  )
}
