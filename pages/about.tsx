import Seo from '../components/Seo/Seo'

import CallToAction from '../components/CallToAction/CallToAction'
import Eyebrow from '../components/Eyebrow/Eyebrow'
import LogoCloud from '../components/LogoCloud/LogoCloud'
import PageHeader from '../components/PageHeader/PageHeader'
import Team from '../components/Team/Team'

const founders = [
  {
    name: 'Michihiro Nakashima',
    rank: '7-dan Kyoshi',
  },
  {
    name: 'Shigeshi Takei',
    rank: '',
  },
]

const instructors = [
  {
    name: 'Carolyn Tynan Yatomi',
    rank: '6-dan Renshi',
    role: 'Head Instructor',
  },
  {
    name: 'David Daniel Watanabe',
    rank: '6-dan Renshi',
  },
  {
    name: 'Hideo Mizutani',
    rank: '6-dan',
  },
  {
    name: 'Albert Choi',
    rank: '4-dan',
  },
  {
    name: 'Ray Yada',
    rank: '4-dan',
  },
]

const values = [
  {
    kanji: '基',
    title: 'Solid basics',
    description:
      'A solid understanding of kendo basics and the skills necessary for rank advancement.',
  },
  {
    kanji: '心',
    title: 'Strong mind and body',
    description: 'Practice that helps you develop a strong mind and body.',
  },
  {
    kanji: '礼',
    title: 'Respect for others',
    description:
      'Respect for others, starting with the basic etiquette every beginner learns first.',
  },
]

export default function About(): React.JSX.Element {
  return (
    <>
      <Seo title="About" />
      <PageHeader eyebrow="About" title="What is kendo?" kanji="剣道">
        <p>
          Kendo (剣道 Kendō), meaning &ldquo;way of the sword&rdquo;, is a
          modern Japanese martial art of sword-fighting based on traditional
          swordsmanship (Kenjutsu) which originated with the samurai class of
          feudal Japan.
        </p>
      </PageHeader>

      {/* Dojo story */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
            <img
              className="aspect-800/484 w-full object-cover"
              src="/about-photo.jpg"
              alt="Studio City Kendo Dojo members in kendo armor"
            />
          </div>
          <div>
            <Eyebrow>Our dojo</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Studio City Kendo Dojo
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Bridges Academy, formerly Osaka Sangyo University of Los Angeles
              is home to Studio City Kendo Dojo, which is also known as
              &ldquo;OSULA.&rdquo; Nakashima Sensei and Takei Sensei are OSULA
              founding Sensei. Along with the other dojo Sensei and instructors
              work together to provide not just a solid understanding of kendo
              basics and the skills necessary for rank advancement, National and
              International competition but to help individuals develop a strong
              mind and body, and respect for others.
            </p>
            <figure className="relative mt-8 overflow-hidden rounded-3xl bg-black p-8">
              <blockquote className="relative text-base leading-7 text-gray-200">
                Studio City Kendo Dojo is a recognized member of both the
                Southern California Kendo Organization (SCKO) the All United
                States Kendo Federation (AUSKF) and the International Kendo
                Federation (FIK). All grades and ranks you achieve are
                recognized by other dojos or organizations at both National and
                International levels.
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="bg-black px-6 py-12 sm:px-10">
              <p className="font-display text-5xl font-bold text-blue-500">
                {value.kanji}
              </p>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* People */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          <Team title="Founders" subtitle="Our Pioneers" people={founders} />
          <Team
            title="Instructors"
            subtitle="Our Senseis and Assistants"
            people={instructors}
          />
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-900">
            Our affiliations
          </h2>
          <div className="mt-6">
            <LogoCloud />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
