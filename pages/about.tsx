import { NextSeo } from 'next-seo'

import CallToAction from '../components/CallToAction/CallToAction'
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
    name: 'Carolyn Yatomi',
    rank: '6-dan',
    role: 'Head Instructor',
  },
  {
    name: 'Hide Mizutani',
    rank: '6-dan',
  },
  {
    name: 'David Watanabe',
    rank: '6-dan',
  },
  {
    name: 'Ray Yada',
    rank: '4-dan',
  },
  {
    name: 'Albert Choi',
    rank: '4-dan',
  },
]

export default function About(): JSX.Element {
  return (
    <>
      <NextSeo title="About" />
      <PageHeader eyebrow="About" title="What is kendo?" kanji="剣道">
        <p>
          Kendo (剣道 Kendō), meaning &ldquo;way of the sword&rdquo;, is a
          modern Japanese martial art of sword-fighting based on traditional
          swordsmanship (Kenjutsu) which originated with the samurai class of
          feudal Japan.
        </p>
      </PageHeader>

      {/* Dojo story */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              className="aspect-[800/484] w-full object-cover"
              src="/about-photo.jpg"
              alt="Studio City Kendo Dojo members in kendo armor"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our dojo
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
            <figure className="mt-8 border-l-4 border-blue-700 bg-gray-50 p-6">
              <blockquote className="text-base leading-7 text-gray-700">
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

      {/* People */}
      <section className="bg-gray-50 py-20 sm:py-28">
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
          <h2 className="text-lg font-semibold text-gray-900">
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
