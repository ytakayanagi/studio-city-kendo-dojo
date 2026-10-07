import Link from 'next/link'
import Seo from '../components/Seo/Seo'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  MapPinIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

import Button from '../components/Button/Button'
import CallToAction from '../components/CallToAction/CallToAction'
import Eyebrow from '../components/Eyebrow/Eyebrow'
import NextPractice from '../components/NextPractice/NextPractice'
import { address, affiliations } from '../lib/site'

const terms = [
  { kanji: '剣道', romaji: 'Kendo', meaning: 'the way of the sword' },
  { kanji: '竹刀', romaji: 'Shinai', meaning: 'bamboo sword' },
  { kanji: '防具', romaji: 'Bogu', meaning: 'armor' },
  { kanji: '素振り', romaji: 'Suburi', meaning: 'practice swings' },
  { kanji: '礼', romaji: 'Rei', meaning: 'bow, respect' },
  { kanji: '面', romaji: 'Men', meaning: 'head strike' },
  { kanji: '小手', romaji: 'Kote', meaning: 'wrist strike' },
  { kanji: '胴', romaji: 'Do', meaning: 'body strike' },
]

const steps = [
  {
    name: 'Get in touch',
    description:
      'Send us a quick message before you visit so we know to expect you and can suggest a good Friday to come.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Watch or try a practice',
    description:
      'Observe a class for free, or jump in. Your first two practices are a free trial, and there is no need to buy gear first.',
    icon: EyeIcon,
  },
  {
    name: 'Learn the basics',
    description:
      'Beginners start with etiquette, footwork, posture, how to hold the shinai and practice swings called suburi.',
    icon: SparklesIcon,
  },
]

const audiences = [
  {
    title: 'Complete beginners',
    description:
      'Most people outside of Japan start kendo as adults. No martial arts background needed, just curiosity.',
    icon: SparklesIcon,
  },
  {
    title: 'Kids and families',
    description:
      'Our youngest student started at 5. Kids do best once they have a good attention span, and families can train together.',
    icon: UserGroupIcon,
  },
  {
    title: 'Returning kendoka',
    description:
      'Already practice kendo? You are welcome here. Get in touch before your first visit and come train with us.',
    icon: AcademicCapIcon,
  },
]

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we do offer free trials for up to two practices.',
  },
  {
    question: 'Can I watch first?',
    answer:
      'Yes, you can observe our practice at no charge. Please get in touch with us before coming to watch.',
  },
  {
    question: 'Do I need gear?',
    answer:
      'Please consult us before buying any gear unless you are experienced in Kendo.',
  },
]

export default function Home(): React.JSX.Element {
  return (
    <>
      <Seo
        title="Learn Japanese Sword Martial Arts"
        description="Kendo classes in Studio City every Friday for kids and adults. Beginners welcome, with two free trial practices."
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black">
        <img
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] opacity-70"
          src="/hero.jpg"
          alt=""
        />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-black via-black/85 to-black/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-black to-transparent"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute -left-40 top-20 -z-10 h-144 w-xl rounded-full bg-blue-700/30 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-end gap-12 px-4 pb-16 pt-36 sm:px-6 sm:pb-24 sm:pt-48 lg:grid-cols-12 lg:px-8 lg:pb-28">
          <div className="animate-rise lg:col-span-7">
            <Eyebrow dark>剣道 · Kendo in Studio City</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Find your way of the{' '}
              <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                sword.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300 sm:text-xl">
              For more than 20 years, Studio City Kendo Dojo has helped people
              in the southeast San Fernando Valley learn kendo. Beginners of all
              ages are welcome, and your first two practices are free.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">
                Try a free practice
                <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button href="/schedule" variant="outline">
                See the schedule
              </Button>
            </div>
          </div>
          <div
            className="animate-rise lg:col-span-5 lg:flex lg:justify-end"
            style={{ animationDelay: '150ms' }}
          >
            <NextPractice />
          </div>
        </div>
      </section>

      {/* Vocabulary marquee */}
      <section
        aria-label="Kendo words you will hear"
        className="overflow-hidden border-y border-blue-600 bg-blue-700 py-5"
      >
        <div className="animate-marquee flex w-max gap-12 pr-12">
          {[...terms, ...terms].map((term, index) => (
            <p
              key={`${term.romaji}-${index}`}
              aria-hidden={index >= terms.length}
              className="flex items-baseline gap-3 whitespace-nowrap text-white"
            >
              <span className="font-display text-2xl font-bold">
                {term.kanji}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                {term.romaji}
              </span>
              <span className="text-sm text-blue-200">{term.meaning}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Bento */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Why start here</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              A neighborhood dojo with a world-class path.
            </h2>
          </div>

          <div className="mt-14 grid auto-rows-[minmax(11rem,auto)] gap-4 md:grid-cols-6 lg:grid-cols-12">
            <figure className="group relative isolate overflow-hidden rounded-3xl bg-black md:col-span-6 md:row-span-2 lg:col-span-7">
              <img
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/about-photo.jpg"
                alt="Studio City Kendo Dojo members, kids and adults, in kendo armor"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent"
              />
              <figcaption className="flex h-full min-h-88 flex-col justify-end p-8">
                <p className="font-display text-3xl font-bold text-white">
                  Kids, teens and adults train together.
                </p>
                <p className="mt-2 text-gray-300">
                  Our youngest started at 5, our oldest in their 50s.
                </p>
              </figcaption>
            </figure>

            <div className="flex flex-col justify-between rounded-3xl bg-blue-700 p-8 text-white md:col-span-3 lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
                Free trial
              </p>
              <div>
                <p className="font-display text-6xl font-extrabold">2</p>
                <p className="mt-1 text-lg text-blue-100">
                  practices free, and watching is always free.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-black p-8 text-white md:col-span-3 lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
                Every week
              </p>
              <div>
                <p className="font-display text-4xl font-extrabold">
                  Fridays, 7pm
                </p>
                <p className="mt-1 text-gray-400">
                  All levels until 8:35pm, then advanced until 9pm.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-gray-50 p-8 ring-1 ring-inset ring-gray-200 md:col-span-3 lg:col-span-4">
              <HeartIcon className="h-8 w-8 text-blue-700" aria-hidden="true" />
              <div>
                <p className="font-display text-4xl font-extrabold text-gray-900">
                  20+ years
                </p>
                <p className="mt-1 text-gray-600">
                  Teaching kendo in the southeast Valley.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gray-50 p-8 ring-1 ring-inset ring-gray-200 md:col-span-3 lg:col-span-8">
              <div>
                <p className="font-display text-2xl font-bold text-gray-900">
                  Ranks recognized worldwide
                </p>
                <p className="mt-1 max-w-lg text-gray-600">
                  Grades earned here are recognized by dojos and organizations
                  nationally and internationally.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {affiliations.map((org) => (
                  <a
                    key={org.shortName}
                    href={org.href}
                    target="_blank"
                    rel="noreferrer"
                    title={org.name}
                    className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-inset ring-gray-200 transition-shadow hover:shadow-md"
                  >
                    <img
                      className="h-9 w-9 object-contain"
                      src={org.logo}
                      alt=""
                    />
                    <span className="text-sm font-semibold text-gray-900">
                      {org.shortName}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is kendo */}
      <section className="relative isolate overflow-hidden bg-black py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-40 top-0 -z-10 h-120 w-120 rounded-full bg-blue-700/30 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow dark>What is kendo?</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              A modern martial art with samurai roots.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Kendo (剣道), meaning &ldquo;way of the sword&rdquo;, is a modern
              Japanese martial art of sword-fighting based on traditional
              swordsmanship (Kenjutsu) which originated with the samurai class
              of feudal Japan.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              At our dojo, the goal is simple: enjoy practice and keep growing
              on your kendo journey. Along the way you build a strong mind and
              body, and respect for others.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-blue-400 hover:text-blue-300"
            >
              Meet our dojo and instructors
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative">
            <p
              aria-hidden="true"
              className="select-none text-center font-display text-[9rem] font-extrabold leading-none text-white sm:text-[13rem]"
            >
              剣道
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {terms.slice(1, 4).map((term) => (
                <div
                  key={term.romaji}
                  className="rounded-2xl bg-white/5 p-4 text-center ring-1 ring-inset ring-white/10"
                >
                  <p className="font-display text-2xl font-bold text-white">
                    {term.kanji}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">
                    {term.romaji}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{term.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First steps */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Getting started</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Your first visit, step by step.
              </h2>
            </div>
            <p className="max-w-sm text-lg text-gray-600">
              Never held a sword before? That is how almost everyone starts.
            </p>
          </div>
          <ol className="relative mt-16 grid gap-6 md:grid-cols-3">
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-10 hidden h-px bg-linear-to-r from-blue-700 via-blue-300 to-transparent md:block"
            />
            {steps.map((step, index) => (
              <li
                key={step.name}
                className="relative rounded-3xl bg-white p-8 shadow-xs ring-1 ring-inset ring-gray-200"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/30">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-5xl font-extrabold text-gray-100">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold text-gray-900">
                  {step.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>Who practices here</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              There is no age limit in kendo.
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl p-8 ring-1 ring-inset ring-gray-200 transition-colors hover:bg-black hover:ring-black"
              >
                <item.icon
                  className="h-8 w-8 text-blue-700 transition-colors group-hover:text-blue-400"
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-display text-2xl font-bold text-gray-900 transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-gray-600 transition-colors group-hover:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + quick FAQ */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-inset ring-gray-200">
            <iframe
              title="Map to Studio City Kendo Dojo"
              src="https://www.google.com/maps?q=3921+Laurel+Canyon+Blvd,+Studio+City,+CA+91604&output=embed"
              className="h-72 w-full border-0 bg-gray-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex flex-col justify-between gap-6 p-8 sm:flex-row sm:items-end">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
                  <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                  Find us
                </p>
                <p className="mt-3 font-display text-2xl font-bold text-gray-900">
                  {address.venue}
                </p>
                <p className="mt-1 text-gray-600">
                  {address.street}, {address.city}
                </p>
              </div>
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Get directions
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 ring-1 ring-inset ring-gray-200 sm:p-10">
            <Eyebrow>Quick answers</Eyebrow>
            <dl className="mt-6 divide-y divide-gray-100">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-5 first:pt-0">
                  <dt className="font-display text-xl font-bold text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/membership"
              className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-blue-700 hover:text-blue-600"
            >
              More questions and membership fees
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
